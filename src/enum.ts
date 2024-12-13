enum Role {
  ADMIN,
  USER,
}
const person = { role: Role.ADMIN };
if (person.role === Role.ADMIN) {
  // console.log('Role: ', Role.ADMIN);
}
// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"

enum UseStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Banned = 'BANNED',
}
let userStatus: UseStatus = UseStatus.Active;

enum HTTPCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}
function respond(status: HTTPCodes) {
  // handle response
}
respond(HTTPCodes.OK);

const enum ConstHTTPCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}
const HTTPStatus = ConstHTTPCodes.OK;
// console.log(HTTPStatus); // 200

// const enum Test {
//   A = 1,
//   B = 2,
// }
// for (let item in Test) {
//   // does not work
//   console.log(item);
// }
