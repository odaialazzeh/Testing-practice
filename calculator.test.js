const calculator = require('./calculator');

const num = new calculator();
  test("add two numbers", () => {
    expect(num.add(5,2)).toBe(7);
  });

  test("subtract two numbers", () => { 
    expect(num.subtract(5,2)).toBe(3);
  });

  test("divide two numbers", () => { 
    expect(num.divide(5,2)).toBe(2.5);
  });

  test("multiply two numbers", () => { 
    expect(num.multiply(5,2)).toBe(10);
  });

