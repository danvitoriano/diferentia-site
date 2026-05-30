import {
  createInstrutorasOgImageResponse,
  instrutorasOgAlt,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const alt = instrutorasOgAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createInstrutorasOgImageResponse();
}
