import { opendir, mkdir, readdir , copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathSrc = `${__dirname}\\files`;
const pathDest = `${__dirname}\\files_copy`;

export const copy = async () => {
  await opendir(pathSrc).then(() => {
    chekDestFolder();
  }).catch (err => {
    throw new Error('FS operation failed');
  });
};
  
copy();

async function chekDestFolder() {
  await opendir(pathDest, err => {
    if (err) {
      if (err.code === 'ENOENT') {
        mkdir(pathDest, { recursive: true }, (err) => {
          if (err) throw err;
        }).then(res => {
          copyTaskFiles();
        });
      }
    } else {
      throw new Error('FS operation failed.');
    }
  });
}

async function copyTaskFiles() {
  await readdir(pathSrc, {withFileTypes: true})
  .then(files => {
    for (let file of files) {
      const src = `${pathSrc}/${file.name}`;
      const dest = `${pathDest}/${file.name}`;
      copyFile(src, dest);
    }
    console.log('Folder copied successfully!');
  }).catch(err => {
    if (err) throw err;
  });
}