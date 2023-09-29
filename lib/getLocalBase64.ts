import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export default async function getBase64(imageUrl: string) {
  const buffer = await fs.readFile(`public/${imageUrl}`);
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}
