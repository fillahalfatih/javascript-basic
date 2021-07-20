
// Dimulai dari 0
// index = Harus Number, length-1
// Data apa aja bisa; Number, Boolean, dan String

let arrayKosong = [];
let arrayNama = ["Jay", "Jake", "Heesung"];

// Menambah Array
const names = [];
names.push("Kangmin");
names.push("Park Seo Joon", "Park Bo Gum");
names.push("Nam Do San", "Han Ji Pyeong");

console.table(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[0] = "Lee Do Hyun";
console.table(names); // index[0] = Lee Do Hyun

delete names[2]; // Delete Array
console.table(names);

names[2] = "Abis delete, Diubah lagi";

// Milti Dimension array
names.push(["Fillah", "Alfatih"]);
console.table(names);
