import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathSrc = `${__dirname}\\files`;

export const list = async () => {
  readdir(pathSrc)
  .then((res) => { // check source folder
    console.log(res);
  }).catch (err => {
    throw new Error('FS operation failed');
  });
};

list();
