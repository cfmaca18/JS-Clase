a=parseFloat(prompt("ingrese el primer valor"))
b=parseFloat(prompt("Ingrese el segundo valor"))

function calcular_suma (a,b){
return a+b
}
function calcular_resta (a,b){
return a-b
}
function calcular_producto (a,b){
return a*b
}
function calcular_division (a,b){
    if (b != 0){
        r=a/b
    }

    else{
        console.log("No se puede dividir entre 0.")
    }
return r
}
function calcular_exponenciacion (a,b){
return a**b
}
console.log("1 para suma")
console.log("2 para resta")
console.log("3 para producto")
console.log("4 para division")
console.log("5 para exponenciacion")
console.log("6 para salir")

opcion = prompt ("seleccione el tipo de operacion a realizar:")
if (opcion == "1"){
    console.log(calcular_suma(a, b))
}
else if (opcion == "2"){
    console.log(calcular_resta(a, b))
}
else if (opcion == "3"){
    console.log(calcular_producto(a, b))
}
else if (opcion == "4"){
    console.log(calcular_division(a, b))
    if (y != 0){
        console.log(division(a, b))
    }
}
if (opcion == "5"){
    console.log(calcular_exponenciacion(a, b))
}

//function calcular_resta (a,b){
    //var c = a-b
    //return c
    
    
    //document.write(calcular_resta(a,b))

   // function calcular_multiplicacion (a,b){
        //var c = a*b
        //return c
        //}
        
        //document.write(calcular_multiplicacion(a,b))


