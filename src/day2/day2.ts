import { readFileSync } from "fs";

interface Movement {
  direction: 'x' | 'y';
  value: number;
}

const movement = (line: string): Movement => {
  const [direction, value] = line.split(' ');
  return {
    direction: direction === 'up' || direction === 'down' 
      ? 'y' : 'x',
    value: direction === 'up' ? (Number(`-${value}`)) : Number(value),
  };
};

const part1 = (lines: string[]) => {
  
  const { x, y } = lines.reduce<{ x: number, y: number }>((acc, curr) => {
    const mov: Movement = movement(curr);
    const res = acc;
    res[mov.direction] = acc[mov.direction] + mov.value;
    return res;
  }, { x:0, y:0 });

  return x * y;
};

const part2 = (lines: string[]) => {
 
  const { x, y } = lines.reduce<{ aim:number; x: number, y: number }>((acc, curr) => {
    const mov: Movement = movement(curr);
    const aim = mov.direction === 'y' ? (acc.aim + mov.value) : acc.aim;
    const x = mov.direction === 'x' ? (acc.x + mov.value) : acc.x;
    const y = mov.direction === 'x' ? (acc.y + (aim*mov.value)) : acc.y;
    console.log({ aim, x, y});
    return { aim: aim, x: x, y: y}
  }, { aim:0,x:0,y:0 });

  return x * y;
};

(() => {

  const lines = readFileSync('src/day2/input.txt', 'utf-8')
    .split('\n');

  console.log(part1(lines));
  console.log(part2(lines.slice(0,10)));

})();