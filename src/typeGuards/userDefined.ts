type Dog4 = { bark: () => void };
type Cat2 = { meow: () => void };
function isDog(animal: Dog4 | Cat2): animal is Dog4 {
  return 'bark' in animal;
}
function letAnimalTalk(animal: Dog4 | Cat2) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}
const cat2 = {
  meow() {
    console.log('meow meow meow !!!');
  },
};
// letAnimalTalk(cat2);

type Admin3 = { name: string; privileges: string[] };
type Employee3 = { name: string; startDate: Date };
type Staff = Admin3 | Employee3;
function isEmployee(staff: Staff): staff is Employee3 {
  return (staff as Employee3).startDate !== undefined;
}
const staffMember: Staff = { name: 'Bob', startDate: new Date() };
const isStaffMemberEmployee = isEmployee(staffMember);
if (isStaffMemberEmployee) {
  // console.log(
  //   `Welcome on board, ${staffMember.name}! Your start date's ${staffMember.startDate}`
  // );
}
