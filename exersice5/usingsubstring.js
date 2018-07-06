//-Exersice 5
console.log('Exersice5 - Create a word using substring method\n');

// Definisikan variable input
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0,3); 
var secondWord = word.substring(4,14); 
var thirdWord = word.substring(15,17); 
var fourthWord= word.substring(18,20); 
var fifthWord= word.substring(21,25); 

//Output 
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// Expected result:
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool