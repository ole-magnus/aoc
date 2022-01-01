import { readFileSync } from 'fs';
import '../arrayExtension';

const part1 = (numbers: number[]): number => {
  return numbers
    .reduce<{ last?: number, count: number }>((acc, curr) => {
      if (acc.last) {
        return { 
          count: curr > acc.last ? (acc.count + 1) : acc.count,
          last: curr,
        }
      }
      return { last: curr, count: acc.count};
    }, { count: 0})
    .count;
};

const part2 = (numbers: number[]) => {
  return part1(numbers.sumThrees());
};

(() => {
  const lines = readFileSync('src/day1/input.txt', 'utf-8')
    .split('\n')
    .map(Number);

  console.log(`Part 1: ${part1(lines)}`);
  console.log(`Part 2: ${part2(lines)}`);
})();