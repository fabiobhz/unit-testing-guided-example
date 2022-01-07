const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should mulpiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply a negative and a positive number correctly", () => {
    const result = multiply(3, -6);
    expect(result).toBe(-18);
  });

  test("should multiply any number and a number 0", () => {
    const result =  multiply(18, 0);
    expect(result).toBe(0);
  });
});