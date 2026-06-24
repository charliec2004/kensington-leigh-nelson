import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const input = process.argv[2];

if (!input) {
  throw new Error("Usage: node scripts/prepare-portrait.mjs <source-image>");
}

const outputDir = path.join(process.cwd(), "public");
const optimizedPng = path.join(outputDir, "kensington-portrait-clean.png");
const optimizedWebp = path.join(outputDir, "kensington-portrait-clean.webp");

await mkdir(outputDir, { recursive: true });

const crop = {
  left: 0,
  top: 250,
  width: 1023,
  height: 1287,
};

const source = sharp(input).rotate().extract(crop).resize({
  width: 900,
  withoutEnlargement: true,
});

await source
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(optimizedPng);

await source
  .clone()
  .webp({ quality: 88, effort: 6 })
  .toFile(optimizedWebp);

console.log(`Wrote ${optimizedPng}`);
console.log(`Wrote ${optimizedWebp}`);
