//-Exersice 10
console.log('Exersice10 - Banding Angka\n');

//Definisikan variable
var str;

//Definisikan fungsi
function xo (str){
    var jumlahO = 0;
    var jumlahX = 0;
    if(typeof str === 'string'){
        for(var i = 0; i < str.length; i++){
            // Hitung jumlah karakter 'x' di dalam input
            if(str[i]==='x'){
                jumlahX +=1;
            }
    
            // Hitung jumlah karakter 'o' di dalam input
            if(str[i]==='o'){
                jumlahO +=1;
            }
        }
        // Cek jumlah karakter 'x' dan jumlah karakter 'o' apakah sama
        if(jumlahX === jumlahO){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Maaf input anda harus berupa String';
    }
}

// Display hasil
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
