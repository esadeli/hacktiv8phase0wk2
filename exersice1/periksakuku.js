//-Exersice 1 
console.log('Exersice1 - Periksa kuku \n');

// Definisikan variable input:
var jumlahMurid = 40;
console.log('Jumlah total murid: '+jumlahMurid);

var kondisiKukuMurid = [
    true, false, true, true, true, true, false, true, true, true,
    true, true, true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, false, true, true
];

// Pengecekan
for(var i = 0; i<jumlahMurid; i++){
    if(kondisiKukuMurid[i]===true){
        console.log('Wah kukunya rapih');
    }else {
        var urutanMurid = i+1;
        console.log('Murid ke '+urutanMurid+ ' kamu dihukum');
    }
}
