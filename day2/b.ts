import * as path from 'path';
import { readFileSync } from 'fs';

const input: string[] =
  readFileSync(path.join(__dirname, '.', 'input.txt'), { encoding: 'utf-8' })
    .split('\n');

const valid = input.filter(line => {
  const [posInfo, char, code] = line.split(' ');
  const pos1 = parseInt(posInfo.split('-')[0]);
  const pos2 = parseInt(posInfo.split('-')[1]);
  const character = char.replace(':', '');
  const pos1Matches = code[pos1 - 1] === character;
  const pos2Matches = code[pos2 - 1] === character;
  return (pos1Matches || pos2Matches) && !(pos1Matches && pos2Matches);
});

console.log(valid.length);
