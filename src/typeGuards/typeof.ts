type ComplexType = string | number;
// function combine(a: ComplexType, b: ComplexType) {
//   return a + b; // error, coz typescript does not know how to work with these types
// }
function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}
