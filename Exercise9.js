//tugas 1
function shoutOut() {
  console.log('Halo Function!');
}
console.log(shoutOut());

//tugas2
var parameter1, parameter2;
var num1 = 5;
var num2 = 6;

function calculateMultiply(parameter1, parameter2) {
  var calcResult;
  calcResult = parameter1 * parameter2;
  return calcResult;
}

var hasil = calculateMultiply(num1, num2);
console.log(hasil);

//tugas 3

var name = 'Dafi';
var age = 23;
var address = 'Citayem, Depok'
var hobby = 'Tidur';

var pName, pAge, pAdress, pHobby;

function processSentence(pName, pAge, pAdress, pHobby) {
  var sentenceResult;
  console.log('Nama Saya '+ pName +', umur Saya '+ pAge +' tahun, alamat Saya di '+ pAdress +', dan Saya mempunyai hobi '+ pHobby);
  
}

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);