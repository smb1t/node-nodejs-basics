import { createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
  const file = `${__dirname}\\files\\fresh.txt`;
  const mes = 'I am fresh and young!';

  open(file, 'wx').then(res => {
    createWriteStream(file).write(`${mes}\n`);
    console.log('The file has been created.');
  }).catch(err => {
    if ( err.code === 'EEXIST' ) console.error('FS operation failed.');
  })
};

create();


