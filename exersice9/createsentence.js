//-Exersice 9
console.log('Exersice9 - Create sentence\n');

// Definisikan variable
var name= 'Barry Allen';
var age= 23;
var address= 'Central City';
var hobby= 'lari';
var fullSentence;


// Checking input
console.log('Nama: '+name);
console.log('Umur: '+age);
console.log('Alamat: '+address);
console.log('Gobi: '+hobby+'\n');

// Definisikan fungsi
function processSentence(name, age, address, hobby){
    return 'Nama saya '+name+ 
           ', umur saya '+age+' tahun'+
           ', alamat saya di '+address+ 
           ', dan saya punya hobby yaitu '+hobby+'!';
}

fullSentence = processSentence(name,age,address,hobby);

//Display hasil
console.log(fullSentence);