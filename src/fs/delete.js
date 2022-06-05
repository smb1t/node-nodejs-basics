import { open, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const file =`${__dirname}\\files\\fileToRemove.txt`;

export const remove = async () => {
  open(file, 'r')
  .then(( )=> {
    unlink(file);
    console.log('File deleted.');
  })
  .catch((error) => {
    throw new Error('FS operation failed');
  });
};

remove();