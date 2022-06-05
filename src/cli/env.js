import { env, stdout } from 'process';
export const parseEnv = () => {
  stdout.write('\n');
  for (var key in env) {
    if (key.startsWith('RSS_')) 
      stdout.write(`${key}=${env[key]}; `);
  }
  stdout.write('\n');
};

parseEnv();
// RSS_name1=value1 RSS_name2=value2 node src/cli/env