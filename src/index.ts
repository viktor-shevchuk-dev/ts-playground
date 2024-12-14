// function identity<T>(arg: T): T {
//   return arg;
// }
// const output1 = identity<string>('myString');
// const output2 = identity<number>(12);

// const reverse = <T>(items: T[]): T[] => items.reverse();
// const nums = reverse<number>([1, 2, 3]);
// const strs = reverse<string>(['a', 'b', 'c']);

// function lengthOfObj<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }
// lengthOfObj({ book: 'Crime and Punishment', length: 320 });

// const student = { name: 'John', age: 25 };
// function getProperty<ObjectType, KeyType extends keyof ObjectType>(
//   obj: ObjectType,
//   key: KeyType
// ): ObjectType[KeyType] {
//   return obj[key];
// }
// const studentName = getProperty(student, 'name');
// const studentAddress = getProperty(student, 'age');

// type Todo = { title: string; description: string; completed: boolean };
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }
// const todo1 = { title: 'Learn TS', description: 'basics', completed: false };
// const todo2 = updateTodo(todo1, { description: 'generics' });

// type User = { name: string; age: number; updateAge: (age: number) => void };
// const john: Readonly<User> = {
//   name: 'John',
//   age: 30,
//   updateAge(age: number) {
//     // this.age = age; // Cannot assign to 'age' because it is a read-only property.
//   },
// };
// // john.age = 31; // Cannot assign to 'age' because it is a read-only property.
// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// // numbers.push(7); // Property 'push' does not exist on type 'readonly number[]'.
// // numbers[0] = 0; // Index signature in type 'readonly number[]' only permits reading.

// type Person = { name: string; age: number; address: string };
// type PersonSummary = Pick<Person, 'name' | 'age'>;
// const johnSummary: PersonSummary = { name: 'John', age: 30 };

// type Person = { name: string; age: number; address: string };
// type PersonWithoutAddress = Omit<Person, 'address'>;
// const john: PersonWithoutAddress = { name: 'John', age: 32 };

// type CityDatabase = Record<string, number>;
// const database: CityDatabase = {
//   Kyiv: 288400,
//   Kharkiv: 144100,
//   Odesa: 1015000,
// };
// database.Lviv = 721301;
