import * as vscode from "vscode";
import * as forge from "node-forge";
import { ServerOptions } from "https";
import { SecretStorage } from "vscode";

export async function createTLSOptions(
  context: vscode.ExtensionContext,
): Promise<{ tlsOptions: ServerOptions; created: boolean }> {
  const secrets: SecretStorage = context.secrets;
  var privatePem = await secrets.get("private_pem");
  var certPem = await secrets.get("cert_pem");

  var created = false;
  if (!privatePem || !certPem) {
    created = true;
    console.log("Generating new keys");
    // https://www.npmjs.com/package/node-forge
    // Generate a keypair or use an existing private key
    const keys = forge.pki.rsa.generateKeyPair(2048);

    // Create a new certificate
    let cert = forge.pki.createCertificate();

    // Fill the required fields
    cert.publicKey = keys.publicKey;
    cert.serialNumber = "01";
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(
      cert.validity.notBefore.getFullYear() + 1,
    ); // 1 year validity

    // Add extensions and subject details
    var attrs = [
      {
        name: "commonName",
        value: "goosecode.app",
      },
      {
        name: "organizationName",
        value: "GooseClip",
      },
      {
        shortName: "OU",
        value: "GooseCode VSCode Extension",
      },
    ];
    cert.setSubject(attrs);
    cert.setIssuer(attrs); // self-signed, so issuer is same as subject
    cert.setExtensions([
      {
        name: "basicConstraints",
        cA: true,
      },
      {
        name: "keyUsage",
        keyCertSign: true,
        digitalSignature: true,
      },
      {
        name: "extKeyUsage",
        serverAuth: true,
      },
      {
        name: "subjectKeyIdentifier",
      },
    ]);

    // Self-sign the certificate
    cert.sign(keys.privateKey);

    privatePem = forge.pki.privateKeyToPem(keys.privateKey);
    certPem = forge.pki.certificateToPem(cert);

    await secrets.store("private_pem", privatePem);
    await secrets.store("cert_pem", certPem);
    console.log("Done generating new keys");
  }

  return {
    created: created,
    tlsOptions: {
      key: privatePem,
      cert: certPem,
      requestCert: false,
      rejectUnauthorized: false,
    },
  };
}

export async function purge(context: vscode.ExtensionContext) {
  await context.secrets.delete("private_pem");
  await context.secrets.delete("cert_pem");
}
