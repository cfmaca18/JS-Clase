//Crea un programa  que diga si un numero ingresado por teclado es par o impar


let numero = parseInt(prompt('Ingresa numero: '));
  if( (numero % 2) == 0) {
	console.log(numero + " es par");
  }else{
	console.log(numero + " es impar");
  }