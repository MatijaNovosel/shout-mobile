export function range(from: number, N: number, step: number) {
  return [...Array(N)].map((_, i) => from + i * step);
}