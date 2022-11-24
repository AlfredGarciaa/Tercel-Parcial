function contar(palabra) {
  let vacio = " ";

  if(palabra == vacio){

    return 0;
  }
  else {

    return 1;
  }
}

function sumar(palabra){
  var res = 3;
  var cadenaArray = palabra.split(/[,-]+/);

  for (var i=0; i<cadenaArray.length; i++) {
    if (parseInt(cadenaArray[i]) == cadenaArray[i]){
      res = res+parseInt(cadenaArray[i]);
    }
  }
  
  return res;
}

export {contar, sumar};
