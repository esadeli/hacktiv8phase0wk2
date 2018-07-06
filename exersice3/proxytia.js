//-Exersice 3 
console.log('Exersice3 - Proxytia \n');

// Welcoming message
console.log('===========Selamat datang di game Proxytia=========== \n');


// Definisikan variable input
var nama = 'Barry Allen';
var peran = 'Ksatria' // Pilih antara 'Ksatria','Tabib','Penyihir'

// Algoritma pengecekan
console.log('Input nama anda: ')
if(nama){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!')
    
    console.log('\nPeran yang ada: Ksatria, Tabib atau Penyihir \n');
    
    console.log('Selamat datang di Dunia Proxytia, '+nama);

    if(peran==='Ksatria'){
        console.log('Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!');
    }else if(peran==='Tabib'){
        console.log('Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.');
    }else if(peran==='Penyihir'){
        console.log('Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
    }else{
        console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
    }
}else{
    console.log('Nama harus diisi');
}




