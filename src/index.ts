import { concatenation } from './concatenation';
import './tuple';
import './enum';
import './union';
import './intersection';
import './literal';
import './functions/returnType';
import './functions/never';
import './functions/functionType';
import './customTypes';
import './optionalParamsAndObjectFields';
import './typeVsInterface';
import './typeGuards/typeof';
import './typeGuards/in';
import './typeGuards/instanceof';
import './typeGuards/userDefined';
import './typeCasting';
import './functions/functionOverloads';

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// add('1', 1);

// const total: number = 100;
// const firstName: string = 'Bob';
// const isActive: boolean = false;
// const empty: null = null;
// const undfnd: undefined = undefined;
// let age = 10;
// age = '12';

// const numbers: number[] = [1, 2, 3, 4, 5];

// const user: { name: string; age: number } = { name: 'Bob', age: 12 };

// type User = { name: string; age: number };

// const user: User = { name: 'Bob', age: 12 };

// type eventType = 'lesson' | 'deadline';
// const calendarEvent: eventType = 'deadline';

// type size = 'small' | 'medium' | 'large';
// const buttonSize: size = 'medium';

// let age: any = 10;
// age = 'Bob';

// let firstName: unknown = 'Bob';
// firstName = 13;
// firstName.toFixed();

// type size = 'small' | 'medium' | 'large';
// enum Sizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large',
// }
// const button1: size = 'large';
// const button2: Sizes = Sizes.large;

// const add = (num1: number, num2: number): string => String(num1 + num2);
// console.log(add(2, 3));

// const add = (num1: number, num2: number): void => {
//   console.log(num1 + num2);
// };
// add(2, 3);

// type User = { name: string };
// const greeting = (user: User): void => {
//   console.log(`Hello ${user.name}!`);
// };
// greeting({ name: 'John' });

// type User = { firstName: string; age: number; hobby: string };
// const userConstructor = (
//   firstName: string,
//   age: number,
//   hobby: string
// ): User => ({
//   firstName,
//   age,
//   hobby,
// });
// console.log(userConstructor('Bob', 12, 'programming'));

// type Car = { color: string; price: number; start: (color: string) => void };
// const car = {
//   color: 'red',
//   price: 1000,
//   start(encouragement: string) {
//     return console.log('start ' + encouragement);
//   },
// };
// car.start('U can!');

// type User = { firstName: string; hobby?: string };
// const user1: User = { firstName: 'Bob', hobby: 'programming' };
// const user2: User = { firstName: 'John' };

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
const mixed: (number | string)[] = [1, 'two'];
const numbers: Array<number> = [1, 2, 3, 4, 5];
const users1: { name: string; age: number }[] = [
  { name: 'Tom', age: 12 },
  { name: 'Bob', age: 21 },
];
type User = { name: string; age: number };
const users2: User[] = [
  { name: 'Tom', age: 12 },
  { name: 'Bob', age: 21 },
];

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello');
  });
}
