function lireNombre (id) {
   
    var elNombre = document.getElementById(id);

    var strNombre = elNombre.value;
     
    var nNombre = parseInt(strNombre);
     

    return nNombre;
     

     
} 
 


function createHalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= i; j++) {
      row += '#';
    }

    console.log(row);
  }
}

function onClickDessineTriangle() {
 
    var nbLignes = lireNombre("nbLignes");
     
  createHalfPyramid (nbLignes);
     
}
