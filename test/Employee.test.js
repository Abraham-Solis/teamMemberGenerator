const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee(`TestEmployee` , 1 , `testemployee@gmailcom`);
  expect(employee.name).toBe("TestEmployee");
});

test("Can set id via constructor argument", () => {
  const employee = new Employee("TestEmployee", 1, `testemployee@gmailcom`);
  expect(employee.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  const employee = new Employee("TestEmployee", 1, `testemployee@gmailcom`);
  expect(employee.email).toBe(`testemployee@gmailcom`);
});


test("Can get id via getId()", () => {
  const employee = new Employee("TestEmployee", 1, `testemployee@gmailcom`);
  expect(employee.getId()).toBe(1);
});

test("Can get email via getEmail()", () => {
  const employee = new Employee("TestEmployee", 1, `testemployee@gmailcom`);
  expect(employee.getEmail()).toBe(`testemployee@gmailcom`);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employee = new Employee("TestEmployee", 1, `testemployee@gmailcom`);
  expect(employee.getRole()).toBe(testValue);
});
