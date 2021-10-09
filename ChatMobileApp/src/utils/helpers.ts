export function range(from: number, N: number, step: number): number[] {
  return [...Array(N)].map((_, i) => from + i * step);
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function sample<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomNameAndSurname(): string {
  const names = ["John", "Jack", "Jill", "James", "Jonathan", "Gill", "Stephen"];
  const surnames = ["Young", "White", "Black", "Grey", "Krasinsky"];
  return `${sample<string>(names)} ${sample<string>(surnames)}`;
}