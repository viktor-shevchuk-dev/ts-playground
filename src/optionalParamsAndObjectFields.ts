function greet(name?: string) {
  if (name) {
    return name;
  } else {
    return 'hey';
  }
}
// console.log(greet('Alice'));
// console.log(greet());

type Person = { name: string; age?: number };
const alice: Person = { name: 'Alice', age: 27 };
const bob: Person = { name: 'Bob' };
