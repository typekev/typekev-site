import crypto from "crypto";
import fs from "fs";
import path from "path";

export const requestWithCache = async <T extends object>(
  ...fetchArgs: Parameters<typeof fetch>
): Promise<T> => {
  const cacheDir = path.join(__dirname, "cache");
  const cacheFile = path.join(
    cacheDir,
    `${crypto.createHmac("sha256", fetchArgs[0].toString()).digest("hex")}.json`
  );

  if (fs.existsSync(cacheFile)) {
    const cachedResponse: T = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
    return cachedResponse;
  }

  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  const response: T = await (await fetch(...fetchArgs)).json();
  fs.writeFileSync(cacheFile, JSON.stringify(response), "utf8");

  return response;
};
