// using Employee constructor
const Employee = require("../lib/Employee");

// creates employee object
test("creates an employee object", () => {
  const employee = new Employee("Rochak", 22, "rochak.ms@gmail.com");

  expect(employee.name).toEqual(expect.any(String));

  expect(employee.id).toEqual(expect.any(Number));

  expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId()
test("gets employee ID", () => {
  const employee = new Employee("Rochak", 22, "rochak.ms@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets role from getRole()
test("get role of employee", () => {
  const employee = new Employee("Rochak", 22, "rochak.ms@gmail.com");
  expect(employee.getRole()).toEqual(expect.any(String));
});
