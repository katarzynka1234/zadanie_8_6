
var a = 2;
var b = 2;
var value = (a * a) - (2 * a * b) - (b * b); 

console.log(value);

if (value > 0) {
	console.log('Wynik działania dodatni');
} else if (value < 0) {
	console.log('Wynik działania ujemny');
} else {console.log('Wynik wynosi 0');}