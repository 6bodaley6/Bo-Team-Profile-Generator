const Manager = require("../lib/Manager");

test("creates a object", () => {
  const manager = new Manager("name", 1, "email", 2);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
