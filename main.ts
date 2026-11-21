import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(
  process.env.MAKEFUN_OUTPUT_DIR || path.join(ROOT, "output"),
);

const TEXT =
  "The old oak has stood three hundred winters, and tonight its branches hold the moon the way a cupped hand holds water — loosely, without spilling a drop. The whole dark field is listening.";

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "entry.txt"), TEXT, "utf8");
