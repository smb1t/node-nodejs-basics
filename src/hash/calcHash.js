import { readFile, writeFile  } from 'fs/promises';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = `${__dirname}\\files\\fileToCalculateHashFor.txt`;
const hashSum = crypto.createHash('sha256');

export const calculateHash = async () => {
  readFile(file).then(() => {
    const hex = hashSum.update(file).digest('hex');
    writeFile(file, hex);
  });  
};

calculateHash();