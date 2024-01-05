import { fileURLToPath } from "url";
import { dirname, join } from "path";
import * as fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let t = join(__dirname, "..", "__tests__", "fill.test.js");
const readFile = () =>
  fs.readFile(t, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

console.log(readFile());
