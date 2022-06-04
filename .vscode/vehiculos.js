class Vehiculo {
    constructor(marca, modelo, color) {
            esto _ marca = marca;
            esto _ modelo = modelo;
            esto _ color = color;
            esto _ encendido = falso;
        }
        // métodos
    encender() {
        //console.log('encendio el motor');
        var x = esto.encendido = verdadero;
        devuelve x; //verdadero
    }
    apagar() {
        consol.log('apago el motor');
        esto_encendido = falso;
    }

    // metodo para mostrar datos    
    mostrar_datos(z) {
        console.logregistro(z)
    }
}

// creamos un objeto vehiculo
const carro = vehiculo nuevo(
    'Toyota',
    'Corola',
    'Azul',
);

// herencia de vehiculo
class Moto_extiende_Vehiculo {
    constructor(marca, modelo, color) {
            súper(marca, modelo, color);
            esto_cambio = 'manual';
            esto_manubrio = verdadero;
            esto_llantas = 2;
        }
        // métodos
    acelerar() {
        console.log('Acelerando en moto');
    }
    frenar() {
        console.log('Frenando en moto');
    }
}

// creamos un objeto moto
const moto1 = moto nueva(
    'honda',
    'CBR',
    'rojo',
);