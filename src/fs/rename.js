import { readdir , copyFile, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathSrc = `${__dirname}\\files`;
const fileSrc = `wrongFilename.txt`;
const fileTarget = `properFilename.md`;

export const rename = async () => {
  let srcExist = false;

  await readdir(pathSrc, {withFileTypes: true})
  .then(files => {
    for (let file of files) {
      const src = `${pathSrc}\\${file.name}`;
      const dest = `${pathSrc}\\${fileTarget}`;  

      if ( file.name === fileTarget ) return;
      
      if ( file.name === fileSrc ) {
        srcExist = true;
        copyFile(src, dest).then(function() {
          unlink(`${pathSrc}\\${fileSrc}`);
          console.log('File renamed.');
        })
      }
    }
  }).then(() => {
    if ( ! srcExist ) {
      throw new Error('FS operation failed');
    }

  }).catch(err => {
    if (err) throw err;
  });
};

rename();