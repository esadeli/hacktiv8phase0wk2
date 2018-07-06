//-Exersice 6
console.log('Exersice6 - Ganjil genap Looping\n');

// Definisikan variable input:
var startCount; // akan selalu bernilai 1 
var endCount; // akan selalu bernilai 100
var pertambahan; // Disesuaikan dengan kondisi soal
var kelipatan; // Disesuaikan dengan kondisi soal
               // Pada soal pembuktian ganjil, genap variable ini akan bernilai 2 

// Definisikan function kelipatanTampilan

function kelipatanTampilan(kelipatan,pertambahan){
    initVariable();
    if(pertambahan!==1&&kelipatan>2){
        for(;startCount<=endCount;startCount+=pertambahan){
            if(startCount%kelipatan===0){
                console.log('Angka: '+startCount+' '+kelipatan+' KELIPATAN '+kelipatan);
            }else{
                console.log('');
            }
        }
    }else{
        for(;startCount<=endCount;startCount+=pertambahan){
            if(startCount%kelipatan===0){
                console.log('Angka: '+startCount+' GENAP');
            }else{
                console.log('Angka: '+startCount+' GANJIL');
            }
        }
    }   
}

// Definisikan fungsi inisialisasi variable
function initVariable(){
    startCount = 1;
    endCount = 100;
}

// First Looping 
// Display ganjil, genap dengan pertambahan 1;
console.log('LOOPING PERTAMA \nDisplay ganjil, genap dengan pertambahan 1');
kelipatanTampilan(2,1); // Di dalam case pertama kelipatan = 2 digunakan untuk cek bilangan ganjil genap

// LOOPING KEDUA
// Display kelipatan 3 dengan pertambahan 2; 
console.log('\nLOOPING KEDUA \nDisplay kelipatan 3 dengan pertambahan 2');
kelipatanTampilan(3,2);

// LOOPING KETIGA
// Display kelipatan 6 dengan pertambahan 5; 
console.log('\nLOOPING KETIGA \nDisplay kelipatan 6 dengan pertambahan 5');
kelipatanTampilan(6,5);

// LOOPING KEEMPAT
// Display kelipatan 10 dengan pertambahan 9; 
console.log('\nLOOPING KEEMPAT \nDisplay kelipatan 10 dengan pertambahan 9');
kelipatanTampilan(10,9);