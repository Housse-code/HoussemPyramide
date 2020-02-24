function lireNombre (id) {
   
    var elNombre = document.getElementById(id);

    var strNombre = elNombre.value;
     
    var nNombre = parseInt(strNombre);
     

    return nNombre;
     

     
} 
 


function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
function onClickDessinePyramid() {
 
    var nbLignes = lireNombre("nbLignes");
     
  createHalfPyramid (nbLignes);
     
}
