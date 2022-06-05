import { createReadStream } from 'fs';
import { stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = `${__dirname}\\files\\fileToRead.txt`;

export const read = async () => {
  createReadStream(file, 'utf-8')
    .on('data', chunk => stdout.write(`${chunk}\n`));
};

read();