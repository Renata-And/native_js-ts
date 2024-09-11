import { mult, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test('sum should be correct', () => {
  //action
  const result1 = sum(a, b);
  const result2 = sum(b, c);
  a = 100;
  const result3 = sum(a, c);

  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(103);
})

test('multiple should be correct', () => {
  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);
  const result3 = mult(a, c);

  //expect result
  expect(result1).toBe(2);
  expect(result2).toBe(6);
  expect(result3).toBe(3);
})