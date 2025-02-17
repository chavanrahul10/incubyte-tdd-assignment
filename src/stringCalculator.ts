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

  const numArray = numbers
    .split(customDelimiter || DELIMITER)
    .map((num) => parseInt(num));
  checkForNegativeNumbers(numArray);
  return numArray.reduce((sum, num) => sum + num, 0);
}

function checkForNegativeNumbers(numArray: number[]) {
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}
