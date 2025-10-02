// using object literal
const student = {
  firstName: "Harry",
  lastName: "Mukai",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

// Array literals
const students = ["Naomi", "Ken", "Sharon", "Mercy"];
console.log(student(0));
console.log(student(1));
console.log(student.length);

// last element in the Array
console.log(students[students.length - 1]);

console.log(students);
students.pop();
console.log(students);

console.log(students);
students.push("Kim", "Ashley");
console.log(students);

console.log(students);
students.shift();
console.log(students);

console.log(students);
students.unshift("Kim", "Ashley");
console.log(students);

console.log(students.at(0));
console.log(students.tostring());
