
//LOOPING WHILE
console.log('LOOPING PERTAMA');

var a = 2;

while (a <= 20)
{
console.log(a + ' - I love coding');
a=a+2;
}

console.log('LOOPING KEDUA');
var a = 20;
while (a >= 0)
  {
    console.log(a + ' - I will become fullstack developer');
    a=a-2;
  }

//LOOPING FOR
  console.log('LOOPING PERTAMA');
    for(a = 1; a <= 20; a++){
    console.log(a + ' - I love coding');
    }

    console.log('LOOPING KEDUA');
    for(a = 20; a >= 1; a--){
    console.log(a + ' - I will become fullstack developer');
    }

    //Ganjil Genap
    for(a = 1; a <= 100; a++)
{
  if(a%2==0)
    {
  console.log(a + ' Genap');
  } else {
    console.log(a + ' Ganjil');
  }
}

//Soal 3 kelipatan 3
for(a = 1; a <= 100; a=a+2)
{
  if(a % 3 == 0){
  console.log('3 KELIPATAN 3')
  } else {
    console.log(' ')
  }
}

for(a = 1; a <= 100; a=a+5)
{
  if(a % 6 == 0){
  console.log('6 KELIPATAN 6')
  } else {
    console.log(' ')
  }
}

for(a = 1; a <= 100; a=a+9)
{
  if(a % 10 == 0){
  console.log('10 KELIPATAN 10')
  } else {
    console.log(' ')
  }
}