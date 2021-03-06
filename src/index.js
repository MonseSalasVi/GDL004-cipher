//recibir la clave:desplazamiento
let clave; //al presionar el boton cifrar o desifrar lea el valor del desplazamiento
let textoACifrar; //se guarda el valor del cuadro_de_texto
let validaSiNumeros; //variable booleana que vale true si tiene digitos (0-9)
let expresionRegular = /\d/; //es una expresion regular que especifica que hay digitos
let valoresBotones;
let texto;
//fucnion validacion, si encuentra espacios en blanco en la clave y texto a cifrar
function validacion(e) {
  valoresBotones = e.target.value; // Toma el valor de mis botones
  clave = document.getElementById("clave").value; //toma el texto que escriben
  texto = document.getElementById('cuadro_de_texto').value; //lo cambia a mayusculas
  textoACifrar = texto.toUpperCase(); //mayusculas
  validaSiNumeros = expresionRegular.test(textoACifrar);

  if(clave === '' || textoACifrar === '') { // Validacion para que la clave o cuadro_de_texto tengan valores
    alert("Clave o Texto a cifrar esta vacio.");
    return false;
  } else if (validaSiNumeros  === true){ // textoACifrar contiene digitos
    alert("No se pueden cifrar numeros");
    return false;
  } else {
    if(valoresBotones === "1"){ //si miboton es igual a1 cifrar
      console.log("en encode");
      document.getElementById("cuadro_retorno").value = window.cipher.encode(textoACifrar,clave);
    }else if (valoresBotones === "2"){ //si mi boton es igual 2 desifrar
      //console.log(valoresBotones)
      //console.log("en decode")
      document.getElementById("cuadro_retorno").value = window.cipher.decode(textoACifrar,clave);
      //console.log("en decode 2")

    }


  }
}

document.getElementById("encodeButton").addEventListener("click", validacion);
document.getElementById("decodeButton").addEventListener("click", validacion);
//window.cipher.encode(textoACifrar,clave);
//document.getElementById("cuadro_retorno").value = textoCifrado;

//window.cipher.encode(traducido,clave)
