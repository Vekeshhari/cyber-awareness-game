import crypto from "crypto";

const algorithm = "aes-256-gcm";
const legacyAlgorithm = "aes-256-cbc";
const legacyIv = Buffer.alloc(16, 0);
const formatPrefix = "v2:";

export function getVaultEncryptionKey() {
  const key = process.env.VAULT_ENCRYPTION_KEY;

  if (!/^[a-f0-9]{64}$/i.test(key ?? "")) {
    throw new Error("VAULT_ENCRYPTION_KEY must be a 64-character hex string");
  }

  return Buffer.from(key, "hex");
}

export function isCurrentPasswordFormat(encrypted) {
  return typeof encrypted === "string" && encrypted.startsWith(formatPrefix);
}

export function encryptPassword(password) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(algorithm, getVaultEncryptionKey(), iv);
  const ciphertext = Buffer.concat([
    cipher.update(password, "utf8"),
    cipher.final()
  ]);

  return [
    "v2",
    iv.toString("hex"),
    cipher.getAuthTag().toString("hex"),
    ciphertext.toString("hex")
  ].join(":");
}

export function decryptPassword(encrypted, legacyMasterPassword) {
  if (isCurrentPasswordFormat(encrypted)) {
    const [version, ivHex, tagHex, ciphertextHex, ...extra] = encrypted.split(":");

    if (
      version !== "v2" ||
      extra.length > 0 ||
      !/^[a-f0-9]{24}$/i.test(ivHex) ||
      !/^[a-f0-9]{32}$/i.test(tagHex) ||
      !/^(?:[a-f0-9]{2})*$/i.test(ciphertextHex)
    ) {
      throw new Error("Invalid encrypted password format");
    }

    const decipher = crypto.createDecipheriv(
      algorithm,
      getVaultEncryptionKey(),
      Buffer.from(ivHex, "hex")
    );
    decipher.setAuthTag(Buffer.from(tagHex, "hex"));

    return Buffer.concat([
      decipher.update(Buffer.from(ciphertextHex, "hex")),
      decipher.final()
    ]).toString("utf8");
  }

  const legacyKey = crypto
    .createHash("sha256")
    .update(legacyMasterPassword)
    .digest();
  const decipher = crypto.createDecipheriv(legacyAlgorithm, legacyKey, legacyIv);

  return Buffer.concat([
    decipher.update(encrypted, "hex"),
    decipher.final()
  ]).toString("utf8");
}