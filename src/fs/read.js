import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = `${__dirname}\\files\\fileToRead.txt`;

export const read = async () => {
  readFile(file).then((res) => {
    console.log(res.toString());
  })
  .catch(function(err) {
    throw new Error('FS operation failed');
  })
};

read();