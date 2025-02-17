const DELIMITER = /[\n,]/;
export function add(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  const numArray = numbers.split(DELIMITER);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
