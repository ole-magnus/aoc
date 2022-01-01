export {}
declare global {
  interface Array<T> {
    sumThrees(): number[];
  }
}

Array.prototype.sumThrees= function (): number[]{
  const windows: number[] = [];
  if (this.length < 3) return windows;

  for (let i = 2; i < this.length; i++) {
    windows.push(
      this[i-2] + this[i-1] + this[i]
    );
  }
  return windows;
}