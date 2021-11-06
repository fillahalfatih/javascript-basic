
const person = {
  firstName : "Fillah",
  lastName : "Alfatih",
};

const fullName = person.firstName + " " + person.lastName;

if ("firstName" in person) {
  alert(`Hello ${person.firstName}`);
} else {
  alert(`Hello`);
}

/*
  property atau index = undefined atau null, maka akan tetap dianggap Perbandingan
*/

const student = {
  firstName: "Fillah",
  middlename: undefined,
  lastName: "Alfatih",
}

if ("middlename" in student) {
  alert(`Hello ${student.middlename}`);
} else {
  alert(`Hello student`);
}

// in operator Undefined or Null property

const names = [null, "Fillah", null];
const result = 0 in names; //true
document.writeln(`<p>${result}</p>`);
