export function add(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  return parseInt(numbers);
}
