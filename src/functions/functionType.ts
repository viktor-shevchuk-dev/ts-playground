let f: (first: string, second: number) => void;
f = (first, second) => {
  console.log(first, second);
};
// f('hey', 42);

type CallbackType1 = (num1: number, num2: number) => number;
function calc1(param1: number, param2: number, cb: CallbackType1): void {
  console.log('Result:', cb(param1, param2));
}
// calc1(1, 1, (num1, num2) => num1 + num2);
// calc1(10, 5, (num1, num2) => num1 - num2);

type CallbackType2 = (...nums: number[]) => number;
function calc2(param1: number, param2: number, cb: CallbackType2): void {
  console.log('Result:', cb(param1, param2));
}
// calc2(1, 1, (num1, num2) => num1 + num2);
// calc2(10, 5, (num1, num2) => num1 - num2);
