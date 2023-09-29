import { getPlaiceholder } from "plaiceholder";

export default async function getExternalBase64(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    console.log(`Failed to fetch image: ${error instanceof Error && error.message}`);
  }
}
