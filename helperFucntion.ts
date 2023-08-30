// isEqual function to compare two values deeply
function isEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (typeof a !== "object" || a === null) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// map function to transform array elements
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

// filter function to get elements that satisfy a condition
function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

// reduce function to accumulate values
function reduce<T, U>(
  arr: T[],
  callback: (accumulator: U, currentValue: T) => U,
  initialValue: U
): U {
  let accumulator = initialValue;
  for (const item of arr) {
    accumulator = callback(accumulator, item);
  }
  return accumulator;
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, (num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const filtered = filter(numbers, (num) => num % 2 === 0);
console.log(filtered); // Output: [2, 4]

const sum = reduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // Output: 15

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(isEqual(obj1, obj2)); // Output: true
