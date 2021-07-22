
// data-type (Boolean)
const examValue = 85;

// else if (true) {..}
if (examValue > 90) {
    document.writeln(`<p>Good Job : A</p>`); // True
} else if (examValue > 80) {
    document.writeln(`<p>Good Job : B</p>`);
} else if (examValue > 70) {
    document.writeln(`<p>Good Job : C</p>`);
}else {
    document.writeln(`<p>Try Again</p>`); // False
}
