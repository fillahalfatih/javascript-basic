
// && || !

const nilaiUjian = 90;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
document.writeln(`<p>Nilai ujian = ${lulusUjian}</p>\n`)
const lulusAbsensi = nilaiAbsensi > 75;
document.writeln(`<p>Nilai absensi = ${lulusAbsensi}</p>\n`)

const lulus = lulusUjian && lulusAbsensi;
document.writeln(`<p>Hasil Akhir = ${lulus}</p>`);
