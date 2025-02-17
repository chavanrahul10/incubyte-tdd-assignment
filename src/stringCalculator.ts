const DELIMITER = /[\n,]/;
export function add(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }
  let customDelimiter: string | undefined = undefined;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    customDelimiter = numbers.slice(2, delimiterEndIndex);
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  const numArray = numbers.split(customDelimiter || DELIMITER);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
