window.cipher = {
  encode: (textoACifrar, clave) => {
    //let esValido = validacion(); //si no hay espacios en clave/texto continua
    let letraASCII;
    let formula;
    let asciiALetra;
    let textoCifrado = "";
    for (var i = 0; i < textoACifrar.length; i++) { //Lee leetra por letra
      letraASCII = textoACifrar.charCodeAt(i); // 1Traduce al ascii letra por letra
      formula = (((letraASCII - 65 + parseInt(clave)) % 26) + 65); //formula para recorrer los desplazamientos de letra x letra

      if (letraASCII === 32) { // Si el valor de letraASCII es un ESPACIO
        formula = 32;
      }
      asciiALetra = String.fromCharCode(formula); // valor ascii a letra
      textoCifrado = textoCifrado + asciiALetra; //crear una variable que guarde mis letras
    }
    return textoCifrado;
  },
  decode: (textoACifrar, clave) => {
    //let esValido = validacion(); //si no hay espacios en clave/texto continua
    let letraASCII;
    let formula;
    let asciiALetra;
    let textoCifrado = "";
    for (var i = 0; i < textoACifrar.length; i++) { //Lee leetra por letra
      letraASCII = textoACifrar.charCodeAt(i); // 1Traduce al ascii letra por letra
      formula = (((letraASCII + 65 - parseInt(clave)) % 26) + 65); //formula para recorrer los desplazamientos de letra x letra

      if (letraASCII === 32) { // Si el valor de letraASCII es un ESPACIO
        formula = 32;
      }
      asciiALetra = String.fromCharCode(formula); // valor ascii a letra
      textoCifrado = textoCifrado + asciiALetra; //crear una variable que guarde mis letras
    }
    //console.log(textoCifrado);
    return textoCifrado;
  }
};
