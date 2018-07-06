//-Exersice 6
console.log('Exersice6 - While Looping\n');

// Definisikan variable input
var startCount = 2;
var endCount = 20;

// First looping
 console.log('LOOPING PERTAMA');
 while(startCount <= endCount){
     console.log(startCount + ' - I love coding');
     startCount +=2;
}

// refresh the value of variable startCount and endCount
startCount = 2;
endCount = 20;

// Second looping
console.log('LOOPING KEDUA');
while(endCount >= startCount){
    console.log(endCount + ' I will become fullstack developer');
    endCount -= 2;
}