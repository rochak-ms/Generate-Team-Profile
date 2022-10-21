// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("Created an Manager object", () => {
  const manager = new Manager("Rochak", 22, "rochak.ms@gmail.com", 5);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets roe of employee", () => {
  const manager = new Manager("Rochak", 22, "rochak.ms@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
