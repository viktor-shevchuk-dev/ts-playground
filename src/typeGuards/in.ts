type Admin = { name: string; privileges: string[] };
type Employee2 = { name: string; startDate: Date };
type AdminOrEmployee = Admin | Employee2;
function printDetails(obj: AdminOrEmployee) {
  console.log(`Name: ${obj.name}`);

  if ('privileges' in obj) {
    console.log(`Privileges: ${obj.privileges.join(', ')}`);
  }

  if ('startDate' in obj) {
    console.log(`Start Date: ${obj.startDate}`);
  }
}
const admin: Admin = {
  name: 'Alice',
  privileges: ['access-control', 'manage-settings'],
};
const employee: Employee2 = {
  name: 'Bob',
  startDate: new Date(2020, 0, 15), // January 15, 2020
};
// printDetails(admin);
// printDetails(employee);
