import { createWriteStream } from 'fs';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = `${__dirname}\\files\\fileToWrite.txt`;


export const write = async () => {
  const rl = readline.createInterface({ input, output });
  const stream = createWriteStream(file);
  const mes = 'Write an [exit] or press CTRL+C to stop the script.\n\nWrite some text, please.\n';

  rl.question(mes, (answer) => writeOrExit(answer));
  rl.on('line', (input) => writeOrExit(input));
  rl.on('SIGINT', () => {
    output.write('That\'s all!\n');
    rl.close();
  });

  function writeOrExit(data) {
    if (data === 'exit') {
      rl.emit('SIGINT');
    } else {
      stream.write(`${data}\n`);
    }
  }
};

write();
