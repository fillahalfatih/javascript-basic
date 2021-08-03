
let nilai = "B";

switch (nilai) {
    case "A":
        document.writeln(`<p>Kamu lulus dengan sangat baik</p>`);
        break;
    case "B":
    case "C":
        document.writeln(`<p>Kamu lulus</p>`);
        break;
    case "D":
        document.writeln(`<p>Kamu belum lulus</p>`);
        break;
    default:
        document.writeln(`<p>Mungkin kamu salah jurusan</p>`);
}
