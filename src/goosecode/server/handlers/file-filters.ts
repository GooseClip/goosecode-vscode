import * as path from "path";
import * as vscode from "vscode";

// Default exclusions removed - rely on .gitignore and .goosecodeignore instead
export const defaultExclusions: string[] = [];

// Binary file extensions to skip (won't attempt to open as text)
export const binaryExtensions = new Set([
  // Images
  '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.ico', '.webp', '.svg', '.tiff', '.tif',
  // Audio/Video
  '.mp3', '.mp4', '.wav', '.avi', '.mov', '.mkv', '.flac', '.ogg', '.webm',
  // Archives
  '.zip', '.tar', '.gz', '.rar', '.7z', '.bz2', '.xz',
  // Executables/Libraries
  '.exe', '.dll', '.so', '.dylib', '.bin', '.aar', '.jar', '.war', '.ear',
  // Documents
  '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
  // Fonts
  '.ttf', '.otf', '.woff', '.woff2', '.eot',
  // Other binary formats
  '.db', '.sqlite', '.sqlite3', '.o', '.a', '.lib', '.pyc', '.pyo',
  '.class', '.dex', '.apk', '.ipa', '.dmg', '.iso', '.img',
  // Custom/proprietary formats
  '.goosecode',
]);

export function isBinaryFile(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase();
  return binaryExtensions.has(ext);
}

// Common generated file patterns - these files are deprioritized in search
const generatedPatterns = [
  /\.pb\.(go|ts|js|py)$/,           // Protobuf generated
  /\.g\.dart$/,                      // Dart codegen (json_serializable, etc.)
  /\.freezed\.dart$/,                // Freezed generated
  /\.gen\.(ts|go|js)$/,              // Generic generated
  /\.generated\./,                   // Generic generated marker
  /_generated\./,                    // Another generated marker
  /\.mock\./,                        // Mock files
  /\.min\.(js|css)$/,                // Minified files
  /\.bundle\./,                      // Bundle files
  /\.lock$/,                         // Lock files (package-lock.json, yarn.lock, etc.)
  /\.sum$/,                          // Go sum files
  /vendor\//,                        // Go vendor directory
  /node_modules\//,                  // Node modules
  /\.d\.ts$/,                        // TypeScript declaration files
];

/**
 * Check if a file path looks like a generated file.
 * Generated files have lower priority in search results.
 */
export function isGeneratedFile(filePath: string): boolean {
  const name = path.basename(filePath);
  
  // Multiple dots in filename often indicates generated
  // e.g., "file.pb.go", "model.g.dart", "config.generated.ts"
  const dotCount = (name.match(/\./g) || []).length;
  if (dotCount > 1) {
    // Check if it matches known generated patterns
    for (const pattern of generatedPatterns) {
      if (pattern.test(filePath)) {
        return true;
      }
    }
  }
  
  // Also check full path for directory-based patterns
  for (const pattern of generatedPatterns) {
    if (pattern.test(filePath)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Sort files by priority: non-generated files first.
 * This ensures important source files are searched before generated code
 * when there's a file limit.
 */
export function sortFilesByPriority(files: vscode.Uri[]): vscode.Uri[] {
  return files.sort((a, b) => {
    const aGenerated = isGeneratedFile(a.fsPath);
    const bGenerated = isGeneratedFile(b.fsPath);
    
    // Non-generated files come first
    if (aGenerated && !bGenerated) return 1;
    if (!aGenerated && bGenerated) return -1;
    
    // Preserve original order for files of same priority
    return 0;
  });
}
