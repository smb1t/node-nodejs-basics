import { stdin as input, stdout as output } from 'process';
import {pipeline, Transform } from 'stream';

const ts = new Transform({
  transform(chunk, enc, cb) {
    const str = chunk.toString().trim().split('').reverse().join('');
    this.push(Buffer.from(str + '\n'));
    cb();
  }
});

export const transform = async () => {
  console.log('Press CTRL+C to stop the script.');
  console.log('Write some text, please.\n');
  pipeline(
    input,
    ts,
    output,
    (err) => {
      if (err) throw err;
    }
  );
};

transform();