import {createUnzip} from 'zlib';
import { createReadStream, createWriteStream, unlink } from 'fs';
import {pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = `${__dirname}\\files`;
const file = `${path}\\archive.gz`;

export const decompress = async () => {
  const rs = createReadStream(file);
  const wrs = createWriteStream(`${path}\\fileToCompress.txt`);

  pipeline( rs, createUnzip(), wrs, (err) => {
    if (err) {
      throw err;
    } else {
      unlink(file, (err) => {
        if (err) throw err;
      });
    }
  });
};

decompress();