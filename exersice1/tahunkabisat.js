//-Exersice 1 
console.log('Exersice1 - Penentuan tahun kabisat \n');

// Definisikan variable input
var tahun = 1998;
console.log('Input tahun: '+tahun);

// Penentuan tahun kabisat
if((tahun%4===0)&&(tahun%100!==0)){
    console.log('Tahun '+tahun+' adalah tahun kabisat');
}else if((tahun%400===0)&&(tahun%100===0)&(tahun%4===0)){
    console.log('Tahun '+tahun+' adalah tahun kabisat');
}else{
    console.log('Tahun '+tahun+' bukan tahun kabisat');
}