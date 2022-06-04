class Cuenta {
    constructor(Titular, Cantidad) {
        this.Titular = Titular;
        this.Cantidad = Cantidad;
    }
    set mostrar_titular(nombre) {
        this.Titular = nombre;
    }
    get Titular() {
        return this.Titular;
    }
    set mostrar_cantidad(valor) {
        this.Cantidad = valor;
    }
    get retira_cantidad() {
        return this.Cantidad;
    }
    mostrar() {
        console.log("Titular " + this.Titular + "Cantidad " + this.Cantidad)
    }
    ingresar(Cantidad) {
        if (Cantidad > 0) {
            this.Cantidad = this.Cantidad + Cantidad;
        }
        return this.Cantidad;
    }
    retirar(Cantidad) {
        if (Cantidad > 0) {
            this.Cantidad = this.Cantidad - Cantidad
        }
    }
}
manejarinstancia = new Cuenta("Felipe Maca", 20000);
console.log(manejarinstancia.ingresar(1000));
console.log(manejarinstancia.ingresar(-100));
console.log(manejarinstancia.retirar(100));
console.log(manejarinstancia);