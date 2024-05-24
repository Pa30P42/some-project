import { Mystring } from "./myString";

it("Mystring", () => {
  const string = new Mystring("Kamran");
  expect(string.remove(1)).toBe("amran");
  expect(string.remove(2)).toBe("mran");
  expect(string.remove(3)).toBe("ran");
});
