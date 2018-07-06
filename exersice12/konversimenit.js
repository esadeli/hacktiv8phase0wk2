//-Exersice 12
console.log('Exersice12 - Balik Kata\n');

// Definisikan variable
var menit;

// Definisikan fungsi
function konversiMenit(menit){
    if((menit > 0)&&(typeof menit === 'number')){
        var sisaMenit = menit%60;
        var konversiJam = menit - sisaMenit;

        // konversi menit ke jam
        if(sisaMenit < konversiJam){
            var displayJam = konversiJam/60;
        }else{
            var displayJam = 0;
        }

        // tampilan jika angka menit hanya 1 digit
        if(sisaMenit < 10){
            var displayMenit = '0'+sisaMenit;
        }else{
            var displayMenit = sisaMenit;
        }
        
        return displayJam+':'+displayMenit;
    }else{
        return 'Maaf input anda belum sesuai';
    }
}

// Display hasil
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
