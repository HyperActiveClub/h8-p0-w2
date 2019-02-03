
var rows1 = 5;

for(a = 0; a < rows1; a++){
				console.log(" * ");
}


var rows2 = 5;
for (i=0; i<=rows2; i++){
  var bintang='*';
    for (j=1; j<rows2; j++){
       var bintang=bintang+'*';
    }
    console.log(bintang);
}


var rows3=5;
    for (i=1; i<=rows3; i++){
      var bintang='*';
        for (j=1; j<i; j++){
           var bintang=bintang+'*';
        }
        console.log(bintang);
    }