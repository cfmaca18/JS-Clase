let num1 = parseInt(prompt("Ingrese el primer valor "));
let num2 = parseInt(prompt("Ingrese el segundo valor "));
let mayor

if (num1 >= num2) {
    mayor = num1;
}
else if (num2 >= num1) {
    mayor = num2;
}
  
console.log("El numero mayor es " + mayor)
