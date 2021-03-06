const Intern = require("../lib/Intern");

test("creates a object", () => {
  const intern = new Intern("john", 1, "email", "University of Utah");
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});