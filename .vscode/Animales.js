class Animales{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    cantar(){
        console.log(this.nombre + " puede cantar");
    }
    saltar(){
        return `${this.nombre} puede saltar`; 
    }
}

class Gatos extends Animales{
    constructor(nombre, edad, color){
        super (nombre, edad);
        this.color=color;
    }
    maullar(){
        console.log("el gato maulla y su color es " + this.color);
    }
}

class Perro extends Animales{
    constructor(nombre, edad, tamaño){
        super (nombre, edad);
        this.tamaño=tamaño;
    }
    ladrar(){
        console.log("el perro ladra y su tamaño es " + this.tamaño);
    }
}

class Insectos extends Animales{
    constructor(nombre, edad, tipo){
        super(nombre, edad);
        this.tipo=tipo;
    }
    volar(){
        console.log("el insecto vuela y su tipo es"+ this.tipo)
    }
}
let a=new Gatos("Bombon", 5, "blanco");
console.log(a.saltar());
console.log(a.cantar());
console.log(a.maullar());


let b=new Perro ("Guadalupe", 4, "mediano");
console.log(b.ladrar());
console.log(b.cantar());
console.log(b.saltar());

let c=new Insectos ("Araña", 3, "aractnido")
console.log(c.volar());
console.log(c.cantar());
console.log(c.saltar());