//-Exersice 1 
console.log('Exersice1 - Laundry Day \n');

//Definisikan variable input:
var hitung = 0;
console.log('Jumlah pakaian di mesin cuci saat ini: '+hitung+'\n');
var jumlahPakaianMax = 10;
console.log('Jumlah pakaian anda saat ini '+jumlahPakaianMax+
        ' agar mesin cuci max harus 20 potong\n');



if(jumlahPakaianMax <= 20){
    //Formulasi dan perhitungan:
    console.log('Mari mulai bekerja!');

    while(hitung<jumlahPakaianMax){
        hitung++;
        console.log('Saat ini ada '+hitung+' pakaian di mesin cuci');
    }
    
    if(hitung === 20){
        console.log('\nTerima kasih, total sudah ada '+hitung+' pakaian di mesin cuci \n'
            +'Mesin cuci akan menyala secara otomatis');
    }else{
        console.log('\nJumlah pakaian anda saat ini '+hitung+' silakan masukkan pakaian hingga mencapai 20 potong');
    }
}else{
    console.log('\nJumlah pakaian anda melebihi 20 potong');
}
