// using Employee constructor
const Engineer = require("../lib/Engineer");

// creating engineer object
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Rochak",
    22,
    "rochak.ms@gmail.com",
    "rochak-ms"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test("gets engineer github value", () => {
  const engineer = new Engineer(
    "Rochak",
    22,
    "rochak.ms@gmail.com",
    "rochak-ms"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// gets github from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Rochak",
    22,
    "rochak.ms@gmail.com",
    "rochak-ms"
  );
  expect(engineer.getRole()).toEqual("Engineer");
});
