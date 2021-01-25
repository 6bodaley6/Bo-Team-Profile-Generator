const Character = require("../rpg-tdd");

test("creates a character object", () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  const character = new Character("Luigi", 20, 50);
  // Create a test that checks if the `name` is a `string`
  expect(character.name).toEqual(expect.any(String));
  // Create a test that checks if the `strength` and `hitpoints` are `numbers`
  expect(character.strength).toEqual(expect.any(Number));
  expect(character.hitpoints).toEqual(expect.any(Number));
  // Create a test that checks if the `hitpoints` is greater than the `strength`
  expect(character.hitpoints).toBeGreaterThan(character.strength);
});
// Bonus: write a test that will check if the character is alive or not
test("check if the character is alive or not", () => {
  const character = new Character("Toad", 75, 80);
  expect(character.isAlive()).toBeTruthy();
  character.hitpoints = 0;
  expect(character.isAlive()).toBeFalsy();
});
test("character heals when alive", () => {
  const hitpoints = 10;
  const potion = 5;
  const bowserChar = new Character("bowser", 30, hitpoints);
  bowserChar.heal(potion);
  expect(bowserChar.hitpoints).toBe(potion + hitpoints);
  bowserChar.hitpoints = 0;
  bowserChar.heal(potion);
  expect(bowserChar.hitpoints).toBe(0);
});
