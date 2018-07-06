//-Exersice 5
console.log('Exersice5 - Using substring and length method\n');

// Definisikan variable input
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0,3); 
var secondWord = word.substring(4,14); 
var thirdWord = word.substring(15,17); 
var fourthWord= word.substring(18,20); 
var fifthWord= word.substring(21,25); 

var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

//Output 
console.log('First Word: ' + exampleFirstWord+', with length: ' +firstWordLength);
console.log('Second Word: ' + secondWord+', with length: '+ secondWordLength);
console.log('Third Word: ' + thirdWord+', with length: '+thirdWordLength);
console.log('Fourth Word: ' + fourthWord+', with length: '+fourthWordLength);
console.log('Fifth Word: ' + fifthWord+', with length: '+fifthWordLength);


// Expected result:
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4