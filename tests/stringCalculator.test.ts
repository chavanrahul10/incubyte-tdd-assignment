import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });

  it("should return same number for single number string", () => {
    const result = add("1");
    expect(result).toBe(1);
  });

  it("should return 0 for string with spaces", () => {
    const result = add(" ");
    expect(result).toBe(0);
  });

  it("should return addition of numbers separated by comma", () => {
    const result = add("1,2");
    expect(result).toBe(3);
  });

  it("should return addition of all the numbers separated by comma", () => {
    const result = add("2,3,4,5,6");
    expect(result).toBe(20);
  });

  it("should handle new lines between numbers", () => {
    const result = add("3\n4,10");
    expect(result).toBe(17);
  });

  it("should handle custom delimiter", () => {
    const result = add("//;\n3;4;3");
    expect(result).toBe(10);
  });

  it("should throw an error if there is negative number", () => {
    expect(() => add("2,-2")).toThrow("negative numbers not allowed -2");
  });

  it("should throw an error if there are negative numbers", () => {
    expect(() => add("1,-1,2,-2")).toThrow(
      "negative numbers not allowed -1,-2"
    );
  });

  it("should throw an error if there is negative number (with \\n)", () => {
    expect(() => add("2\n3,-2")).toThrow("negative numbers not allowed -2");
  });
  it("should throw an error if there are negative numbers (with \\n)", () => {
    expect(() => add("1\n-1,2,-2")).toThrow(
      "negative numbers not allowed -1,-2"
    );
  });

  it("should throw an error if there is negative number (with custom delimiter)", () => {
    expect(() => add("//;\n2;-2")).toThrow("negative numbers not allowed -2");
  });

  it("should throw an error if there are negative numbers (with custom delimiter)", () => {
    expect(() => add("//;\n1;-1;2;-2")).toThrow(
      "negative numbers not allowed -1,-2"
    );
  });

  it("should handle delimiter at start", () => {
    const result = add(",1,2");
    expect(result).toBe(3);
  });

  it("should handle delimiter at end", () => {
    const result = add("1,2,");
    expect(result).toBe(3);
  });
  it("should handle multiple successive delimiters in string", () => {
    const result = add("1\n,2");
    expect(result).toBe(3);
  });
  it("should handle spaces in the string", () => {
    const result = add("1 ,2");
    expect(result).toBe(3);
  });

  it("should not consider numbers greater than 1000", () => {
    expect(add("1001,1,2,3")).toBe(6);
  });

  it("should allow to have delimiter of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
});
