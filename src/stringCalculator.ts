const DELIMITER = /[\n,]/;
export function add(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }
  const customDelimiter = getCustomDelimiter(numbers);

  if (customDelimiter) {
    numbers = numbers.slice(
      (customDelimiter.length === 1 ? 3 : customDelimiter.length + 4) + 1
    );
  }

  const numArray = numbers.split(customDelimiter || DELIMITER).map((num) => {
    num = num.trim();
    return num ? parseInt(num) : 0;
  });
  checkForNegativeNumbers(numArray);
  return numArray.reduce((sum, num) => {
    if (num > 1000) return sum;
    return sum + num;
  }, 0);
}

function checkForNegativeNumbers(numArray: number[]) {
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}

function getCustomDelimiter(numbers: string) {
  let customDelimiter: string | undefined = undefined;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    customDelimiter = numbers.slice(2, delimiterEndIndex);
    if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]"))
      customDelimiter = customDelimiter.slice(1, customDelimiter.length - 1);
  }
  return customDelimiter;
}
