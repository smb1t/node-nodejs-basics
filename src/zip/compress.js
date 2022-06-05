import {createGzip} from 'zlib';
import { createReadStream, createWriteStream, unlink } from 'fs';
import {pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = `${__dirname}\\files`;
const file = `${path}\\fileToCompress.txt`;

export const compress = async () => {
  const rs = createReadStream(file);
  const wrs = createWriteStream(`${path}\\archive.gz`);

  pipeline( rs, createGzip(), wrs, (err) => {
    if (err) {
      throw err;
    } else {
      unlink(file, (err) => {
        if (err) throw err;
      });
    }
  });
};

compress();
