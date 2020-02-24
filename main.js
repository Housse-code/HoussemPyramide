function lireNombre (id) {
   
    var elNombre = document.getElementById(id);

    var strNombre = elNombre.value;
     
    var nNombre = parseInt(strNombre);
     

    return nNombre;
     

     
} 
 


function createHalfPyramid (height) {
if ( height < 25 ) {

  for (var i = 0; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= height-i ; j++) {
      row = row + ' ';
    }
  for (var k = 1; k <= (2*i+1); k++) {
	  row+="#";
  }
    console.log(row);
  }
}
else if ( height >=25) {
	console.log ("error");
}
}

function onClickDessineTriangle() {
 
    var nbLignes = lireNombre("nbLignes");
     
  createHalfPyramid (nbLignes);
     
}
