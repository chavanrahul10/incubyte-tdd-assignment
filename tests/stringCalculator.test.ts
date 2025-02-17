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
});
