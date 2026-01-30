import * as path from "path";

export const defaultExclusions = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/out/**",
  "**/target/**",
  "**/__pycache__/**",
  "**/.venv/**",
  "**/venv/**",
  "**/env/**",
  "**/tmp/**",
  "**/log/**",
  "**/vendor/**",
  "**/bin/**",
  "**/obj/**",
  "**/packages/**",
  "**/.vs/**",
  "**/Release/**",
  "**/Debug/**",
  "**/.dart_tool/**",
  "**/DerivedData/**",
  "**/dist-newstyle/**",
  "**/app/build/**",
  "**/.gradle/**",
  "**/.idea/**",
  "**/Pods/**",
  "**/Carthage/**",
  "**/.xcworkspace/**",
  "**/.xcodeproj/**",
  "**/.*",
];

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
