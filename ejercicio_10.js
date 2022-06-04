//Elabora un programa que me muestre en pantalla de forma ordenada de menor a mayor dos números ingresados por teclado, por ejemplo si ingreso 5 Y 4 deberá mostrar, "los números ingresados  son  5 y 4 y organizados  son  4, 5"
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

if(num1 > num2) {
	console.log("Los numeros ingresados son " + num1 +" y "+ num2);
	console.log("El numero mayor es " + num1 +", y el numero menor es "+ num2);
}
else if (num1 < num2) {
	console.log("Los numeros ingresados son " + num1 +" y "+ num2);
	console.log("El numero mayor es " + num2 +", y el menor es "+ num1);
}
else if (num1 == num2)
{
    console.log("Los numeros " + num1 + " y " + num2 + " son iguales")
}