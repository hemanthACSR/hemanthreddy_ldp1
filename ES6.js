const printName = name => `Hi ${name}`;
console.log(printName('hemanth'))

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill('hemanth','150'))

const person = {
  Name: "Noam Chomsky",
  age: 92
}

const { Name, age } = person;
console.log(Name);
console.log(age);