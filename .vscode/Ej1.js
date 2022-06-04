class Persona {
    constructor(Nombre, Edad, DNI) {
        this.Nombre = Nombre
        this.Edad = Edad
        this.DNI = DNI;
    }
    set esMayordeEdad(valor) {
        this.Edad = valor;
    }
    get recibeEdad() {
        return this.Edad;
    }
    Saludar() {
        console.log("Mi nombre es " + this.Nombre + ", mi edad es " + this.Edad + " años " + "y mi DNI es " + this.DNI)
    }
}
manejarinstancia = new Persona("Felipe Maca");
manejarinstancia.DNI = 100000008;
manejarinstancia.Edad = "15";
manejarinstancia.Saludar();
if (manejarinstancia.Edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")

}