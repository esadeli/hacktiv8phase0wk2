//-Exersice 7
console.log('Exersice7 - Barisan Bintang segitiga\n');

// Definisikan variable input:
var jumlahBarisan = 10; // sesuaikan input dengan kebutuhan
console.log('Input jumlah barisan: '+jumlahBarisan);

// Pembuatan barisan
for(var i = 0; i<jumlahBarisan;i++){
    var row = '';
    for(var j = 0; j<=i;j++){
        row += '*';
    }   
    console.log(row);
}