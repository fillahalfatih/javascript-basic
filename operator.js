
/*
  + Pertambahan
  - Pengurangan
  * Perkalian
  / Pembagian
  % Hasil bagi
  ** Eksponensial
*/

/*
  Augmented Assignments
  result = result + 10; --> result += 10;
  result = result - 10; --> result -= 10;
  result = result * 10; --> result *= 10;
  result = result / 10; --> result /= 10;
  ...
*/

let result = 1 + 2; // 3
document.writeln(`<p>1 + 2 = ${result}</p>`)
let originResult = result; // 3

result -= 1; // 2
document.writeln(`<p>${originResult} - 1 = ${result}</p>`);
originResult = result; // 2

result *= 2; // 4
document.writeln(`<p>${originResult} * 2 = ${result}</p>`);
originResult = result; // 4
