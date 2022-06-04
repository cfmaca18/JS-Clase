function Bisabuelos(nombre1) {
    this.nombre1 = nombre1;

}

//Prototipo
Bisabuelos.prototype.saludo1 = function() {
    return `La abuela es ${this.nombre1}`;
}

Bisabuelos.prototype.saludo2 = function() {
    return `El abuelo es ${this.nombre1}`;
}
Bisabuelos.prototype.saludo3 = function() {
    return `El hijo mayor es ${this.nombre1}`;
}
Bisabuelos.prototype.saludo4 = function() {
    return `El hijo menor es ${this.nombre1}`;
}

a = new Bisabuelos('Margarita Flor');
b = new Bisabuelos('Juan Campo');
d = new Bisabuelos('Ivan Flor');
e = new Bisabuelos('Jorge Flor');

console.log(a.saludo1());
console.log(b.saludo2());
console.log(d.saludo3());
console.log(e.saludo4());


//constructor arbol

function Herencia(hijo_ivan, hija_jorge) {

    this.hijo_ivan = hijo_ivan;
    this.hija_jorge = hija_jorge;
}
c = new Herencia('Cristian Flor', 'Danixa Flor');

console.log(c);