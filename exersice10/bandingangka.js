//-Exersice 10
console.log('Exersice10 - Banding Angka\n');

// Definisikan variable:
var angka1;
var angka2;
var result;

// Definisikan fungsi:

function bandingkanAngka(angka1,angka2){
    console.log('Bilangan 1: '+angka1+' Bilangan 2: '+angka2);
    if(angka1 < angka2){
        result = 'true';
    }else if (angka1 === angka2){
        result = -1;
    }else{
        result = 'false';
    }

    return result;
}

// TEST CASES
console.log(bandingkanAngka(5,8));
console.log(bandingkanAngka(5,3));
console.log(bandingkanAngka(4,4));
console.log(bandingkanAngka(3,3));
console.log(bandingkanAngka(17,2));

