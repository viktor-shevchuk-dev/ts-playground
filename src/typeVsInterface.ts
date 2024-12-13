interface Animal2 {
  name: string;
}
interface Animal2 {
  age: number;
}
const dog2: Animal2 = { name: 'Fido', age: 2 };

type AnimalName = { name: string };
type AnimalAge = { age: number };
type Animal3 = AnimalName & AnimalAge;
const dog3: Animal3 = { name: 'Fido', age: 2 };

type Cat = { meow: () => string };
interface Dog2 {
  bark: () => string;
}
type DogOrCat = Dog | Cat;
type DogAndCat = Dog & Cat;

interface Animal4 {
  name: string;
}
interface Dog3 extends Animal4 {
  bark: string;
}
class MyDog implements Dog3 {
  name = 'Fido';
  bark = 'Woof';
}
// class OtherDog implements Dog3 {
//   // Error: Property 'name' is missing in type 'OtherDog'
//   bark = 'Woof!';
// }

interface Walkable {
  walk(): void;
}
interface Eatable {
  eat(): void;
}
class Animal5 implements Walkable, Eatable {
  walk() {
    console.log('The animal walks...');
  }
  eat() {
    console.log('The animal eats...');
  }
}
const animal = new Animal5();

interface AddFunc {
  (num1: number, num2: number): number;
}
let add: AddFunc;
add = (n1, n2) => {
  return n1 + n2;
};
// console.log(add(1, 2));
