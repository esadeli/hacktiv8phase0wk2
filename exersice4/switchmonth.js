//-Exersice 4 
console.log('Exersice4 - Switch Month \n');

// Definisikan variable input
var tanggal = 31; // Input tanggal antara 1 - 31
var bulan = 12; // Input bulan antara 1 - 12
var tahun = 1990; // Input tahun harus bilangan positif

console.log('\nInput Variable: Tanggal= '+tanggal+' Bulan= '+bulan+' Tahun= '+tahun);
// Konversi bulan dari angka ke nama

if(tanggal>0&&tanggal<32&&tahun>0){

    switch(bulan){
        case 1:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Januari '+tahun);
            break;
        case 2:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Februari '+tahun);
            break;
        case 3:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Maret '+tahun);
            break;
        case 4:
            console.log('Tanggal yang diinput adalah: '+tanggal+' April '+tahun);
            break;    
        case 5:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Mei '+tahun);
            break;    
        case 6:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Juni '+tahun);
            break;    
        case 7:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Juli '+tahun);
            break;    
        case 8:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Agustus '+tahun);
            break;    
        case 9:
            console.log('Tanggal yang diinput adalah: '+tanggal+' September '+tahun);
            break;
        case 10:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Oktober '+tahun);
            break;
        case 11:
            console.log('Tanggal yang diinput adalah: '+tanggal+' November '+tahun);
            break;
        case 12:
            console.log('Tanggal yang diinput adalah: '+tanggal+' Desember '+tahun);
            break;    
        default:
            console.log('Bulan yang diinput belum sesuai');
            break;    
    }
}else{
    console.log('Tanggal dan tahun yang diinput belum sesuai');
}
console.log('\nTerima Kasih');