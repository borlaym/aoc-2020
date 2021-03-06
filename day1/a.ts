import * as path from 'path';
import { readFileSync } from 'fs';

const input: number[] =
  readFileSync(path.join(__dirname, '.', 'input.txt'), { encoding: 'utf-8' })
    .split('\n').map(_ => parseInt(_));

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const sum = input[i] + input[j];
    if (sum === 2020) {
      console.log(input[i] * input[j]);
    }
  }
}
