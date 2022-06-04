let numero = parseInt(prompt("Ingrese la unidad en MG a convertir "));
a= (numero * 8388608)
b= (numero * 1048576)
c = (numero * 1024)
d = (numero / 1024)

console.log(numero + "MG equivale a: ")
console.log(a + "Bits")
console.log(b + "Bytes")
console.log(c + "Kb")
console.log(d + "GB")