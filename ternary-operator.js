
// operator sederhana dari if statement

// ! tanpa ternary operator
const nilai = 75;
let ucapan;

if (nilai >= 75) {
  ucapan = "Selamat, anda lulus";
} else {
  ucapan = "Mungkin anda salah jurusan";
}

document.writeln(`<p>${ucapan}, if statement</p>`);

const nilaiTernary = 8;
const kata = nilaiTernary >= 5 ? "Selamat, anda lulus" : "Mungkin anda salah jurusan";

document.writeln(`<p>${kata}, ternary operator</p>`);
