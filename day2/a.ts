import * as path from 'path';
import { readFileSync } from 'fs';

const input: string[] =
  readFileSync(path.join(__dirname, '.', 'input.txt'), { encoding: 'utf-8' })
    .split('\n');

const valid = input.filter(line => {
  const [countInfo, char, code] = line.split(' ');
  const min = parseInt(countInfo.split('-')[0]);
  const max = parseInt(countInfo.split('-')[1]);
  const character = char.replace(':', '');
  const count = Array.from(code).filter(c => c === character).length
  return count >= min && count <= max
});

console.log(valid.length);
