let num1 = parseInt(prompt("Hola Tatiana, ingresa tu presupuesto para ir a tomar un café con Paola "))
let transporte_Bus = 1600 * 4
let cafe_campanario = 2000 * 2
let cafe_terraplaza = 4000 * 2

a = transporte_Bus + cafe_campanario 
b = cafe_terraplaza
d = num1 - a
e = num1 - b

document.write("Tatiana, si decides ir a campanario a tomar café con Paola, el precio total incluyendo pasaje de ida y vuelya, más los cafés tiene un valor de " + a + ". Y si decides ir a terraplaza, los pasajes no se incluirirán. el precio de los cafés de terraplaza tendrá un valor de " + b + ". Teniendo en cuenta que tu presupuesto es de " + num1 + ". El sistema te recomienda que vayas a terraplaza ya que vas a ahorrar un valor de " + b + ", Y si decides ir a campanario el valor subira a " + e)
