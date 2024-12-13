const someValue: unknown = 'this is a string';
const strLength1: number = (<string>someValue).length;
// or
const strLength2: number = (someValue as string).length;
// const strLength3: number = someValue.length; // err

// const input = document.querySelector('input');
// input.value = 'test';
const input1 = <HTMLInputElement>document.querySelector('input');
input1.value = 'test';
// or
const input2 = document.querySelector('input') as HTMLInputElement;
input2.value = 'test';
