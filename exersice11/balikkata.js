//-Exersice 11
console.log('Exersice11 - Balik Kata\n');

// Definisikan variable
var kata;

//Definisikan fungsi
function balikKata(kata) {
    if(typeof kata === 'string'){
        var reverse ='';
        for(var i = kata.length-1;i > -1; i--){
            reverse = reverse + kata[i];
        }
        return reverse;
    }else{
        return 'Your input is not String type';
    }
    
}

// Display hasil
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
