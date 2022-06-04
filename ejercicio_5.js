const num1 = parseFloat(prompt("Ingrese el primer numero: "));
const num2 = parseFloat(prompt("Ingrese el segundo numero: "));
const num3 = parseFloat(prompt("Ingrese el tercer numero: "));
let mayor

if(num1 >= num2 && num1 >= num3) {
    mayor= num1;
}
else if (num2 >= num1 && num2 >= num3) {
    mayor= num2;
}
else {
    mayor= num3;
}

console.log("El numero mayor es " + mayor)