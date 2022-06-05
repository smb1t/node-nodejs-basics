import { argv, stdout } from 'process';

export const parseArgs = () => {
    argv.forEach((val, index) => {
      if ( val.startsWith('--') && (val.length > 2) && val[2] !== '-' ) {
        stdout.write(`${val} is ${argv[index + 1]}, `);
      }
    });

    stdout.moveCursor(-2, 0);
    stdout.clearLine(1);
};

parseArgs();

// node src/cli/args --propName value1 --prop2Name value2