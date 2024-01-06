import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as fs from 'node:fs';
import { readFile, unlink, copyFile } from 'node:fs/promises';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let t = join(__dirname, '..', '__tests__', 'fill.test.js');
// const readFileCallback = () =>
//   fs.readFile(t, (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });

// console.log(readFileCallback());

const a = await readFile(t, 'utf-8').catch((e) => console.log(e.message));

// console.log(os.tmpdir());

const fileToCopy = join(__dirname, '..', '__fixtures__', 'before.html');
const f = join(__dirname, '..', '__fixtures__', 'before1.html');

copyFile(fileToCopy, f);
