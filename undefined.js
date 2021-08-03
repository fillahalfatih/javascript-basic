
let name; // undefined
// let name = "Fillah"; // defined

if (name === undefined) {
    document.writeln(`<p>UNDEFINED</p>`)
} else {
    document.writeln(`<p>DEFINED</p>`)
};

// Undefined Array value
const names = ["Fillah", "Alfatih"];

if (names[1] === undefined) {
    document.writeln(`<p>${names[1]} = Array Undefined</p>`)
} else {
    document.writeln(`<p>${names[1]} = Array Defined</p>`)
};

// Object
// const person = {}; // Undefined
const person = {
    name : "Fillah"
};

if (person.name === undefined) {
    document.writeln(`<p>Object Undefined</p>`)
} else {
    document.writeln(`<p>Object Defined</p>`)
};
