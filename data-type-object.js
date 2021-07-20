
// Index bisa "String"
// index = attributes or properties

const person = {
  // "Nama Lengkap"
  Nama : "Fillah Alfatih",
  Alamat : "Indonesia",
  Umur : 16
};

// Ubah property / attribute
// person["Nama"] = "Fillah Alfatih";
// person["Alamat"] = "Indonesia";
// person["Umur"] = 16;

console.table(person);

console.info(`Nama : ${person.Nama}`);
console.info(`Alamat : ${person.Alamat}`);
console.info(`Umur : ${person.Umur}`);

// Delete property
delete person["Umur"];
console.table(person);
