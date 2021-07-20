
// Masalah tanpa konversi
const value1 = "1"; // String
const value2 = 1; // Number
const sum = value1 + value2; // 11

document.writeln(`<p>Tanpa konversi = ${sum}</p>`);

/*
  parseInt = String to Number (bil.bulat)
  parseFloat = String to Number (bil.pecahan)
  Number = String to Number (bil.bulat & pecahan)
  number.toString() = Number to String
*/

let myValue = parseInt("1"); // String to Number
let otherValue = 1;
let myResult = myValue + otherValue;
document.writeln(`<p>Dengan konversi = ${myResult}</p>`);

// Perilaku konversi String & Number
document.writeln(`<p>String to Number \"parseInt\" =  ${parseInt("1.9")}</p>`);
document.writeln(`<p>String to Number \"parseFloat\" =  ${parseFloat("1.1")}</p>`);
document.writeln(`<p>\"Number\" = ${Number("1.9")}</p>`);

// Number to String
const a = 1;
const b = 2;
const total = a.toString() + b.toString();

document.writeln(`<p>Number to String = ${total}</p>`);
