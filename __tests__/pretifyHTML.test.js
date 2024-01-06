import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import prettifyHTMLFile from '../src/prettifyHTML.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function filePath(fileName) {
  return path.join(__dirname, '..', '__fixtures__', fileName);
}

const afterPath = filePath('after.html');
const beforePath = filePath('before.html');
const beforeCopyPath = filePath('beforeCopy.html');

beforeEach(async () => {
  await fs.copyFile(beforePath, beforeCopyPath);
});

test('prettifyHTML', async () => {
  await prettifyHTMLFile(beforeCopyPath);
  const beforePrettified = await fs.readFile(beforePath, 'utf-8');
  const expectation = await fs.readFile(afterPath, 'utf-8');
  expect(beforePrettified).toBe(expectation);
});
