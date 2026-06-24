import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const portraitPath = path.join(publicDir, "kensington-portrait-clean.webp");
const outputPath = path.join(publicDir, "og-image.jpg");

const width = 1200;
const height = 630;

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#f7f5ef"/>
  <g opacity="0.35">
    <path d="M120 0V630M360 0V630M600 0V630M840 0V630M1080 0V630" stroke="#c7c0b3" stroke-width="1"/>
    <path d="M72 70H1128M72 560H1128" stroke="#c7c0b3" stroke-width="1.4"/>
  </g>
  <rect x="764" y="68" width="326" height="472" fill="#ded8cc" stroke="#c7c0b3" stroke-width="1.4"/>
  <rect x="804" y="142" width="328" height="408" fill="#aab4ad" stroke="#88958d" stroke-width="1.4"/>
  <rect x="704" y="102" width="398" height="454" fill="#fffdf8" stroke="#c7c0b3" stroke-width="1.4"/>
  <g font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
    <text x="76" y="136" fill="#496558" font-size="22" font-weight="750" letter-spacing="5">${escapeXml("FINANCE AND WEALTH MANAGEMENT")}</text>
    <text x="76" y="488" fill="#69716d" font-size="28" font-weight="500">${escapeXml("Chapman University graduate · IEQ Capital")}</text>
  </g>
  <g font-family="Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif" fill="#1f2523">
    <text x="72" y="268" font-size="104" font-weight="500">Kensington</text>
    <text x="72" y="374" font-size="104" font-weight="500">Leigh Nelson</text>
    <text x="76" y="552" font-size="30" font-weight="500">KLN</text>
  </g>
</svg>`;

const frameOverlay = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect x="704" y="102" width="398" height="454" fill="none" stroke="#c7c0b3" stroke-width="2"/>
  <path d="M704 102L1102 556" stroke="#1f2523" stroke-opacity="0.06" stroke-width="5"/>
</svg>`;

await mkdir(publicDir, { recursive: true });

const portrait = await sharp(portraitPath)
  .resize(370, 426, { fit: "cover", position: "top" })
  .modulate({ saturation: 0.96 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([
    { input: portrait, left: 718, top: 116 },
    { input: Buffer.from(frameOverlay), left: 0, top: 0 },
  ])
  .jpeg({ quality: 91, mozjpeg: true })
  .toFile(outputPath);

console.log(`Generated ${path.relative(rootDir, outputPath)}`);
