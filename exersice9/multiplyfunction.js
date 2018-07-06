//-Exersice 9
console.log('Exersice9 - Multiply Function\n');

// Definisikan variable:
var num1 = 10;
var num2 = 3;
var hasil;

console.log('Bilangan pertama: '+num1+' akan dikalikan dengan bilangan kedua '+num2);

// Definisikan fungsi:
function calculateMultiply(bil1,bil2){
    return bil1*bil2;
}

// Hitung hasil
var hasil = calculateMultiply(num1, num2)

// Display hasil
console.log('\nHasil perkalian: '+hasil);