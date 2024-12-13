function combine1(param1: number | string, param2: number | string) {
  // return param1 + param2; // err
}
function combine2(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

type Dog = { legs: 4; bark: () => void };
type Fish = { fins: 2; swim: () => void };
let pet: Dog | Fish = { legs: 4, bark: () => console.log('Woof!') };
