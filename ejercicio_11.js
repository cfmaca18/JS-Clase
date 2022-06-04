
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
let num3 = parseFloat(prompt("Ingrese el tercer numero: "));
let lista = [num1, num2, num3];
//lista.sort (function(a, b){return a - b})


//if(num1 > num2) {
    console.log("Los numeros ingresados son " + lista) //+ " y organizados de forma ascendente son " + lista_ordenada(num1, num2, num3))
console.log("los numeros ingresados de forma ascendente son " + lista.sort (function(a, b){return b - a}))
//}
//else if (num1 < num2) {
//	console.log("Los numeros ingresados son " + lista + " y organizados de forma ascendente son " + ([num1, num2, num3].sort))
//}
//else if (num1 == num2)
//{
  //  console.log("Los numeros ingresados son " + lista + " y organizados de forma ascendente son " + ([num1, num2, num3].sort))
//}