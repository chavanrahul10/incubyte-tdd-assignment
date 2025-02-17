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
});
