class CuentaJoven {
    constructor(titular, edad, cantidad = 0, bonificacion = 0) {
        this._titular = titular;
        this._edad = edad;
        this._cantidad = cantidad;
        this._bonificacion = bonificacion;

    }
    get bonificacion() {
        return this._bonificacion;
    }
    set bonificacion(bonificacion) {
        this._bonificacion = bonificacion;
    }
    get cantidad() {
        return this._cantidad;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    mostrar() {
        return "Cuenta joven " + this._titular + " Bonificacion" + this._bonificacion;
    }
    esTitularValido() {
        if (this._edad >= 18 && this._edad <= 25) {
            return "Verdadero";
        } else {
            return "El titular no es valido";



        }
    }
    retirar(cantidad) {
        if (this._edad >= 18 && this._edad <= 25) {
            if (cantidad > 0) {
                this._cantidad = this._cantidad - cantidad;
                return "Cantidad a retirar " + cantidad;
            }


        } else {
            return "El titular no es valido ";
        }


    }
}


cuenta = new CuentaJoven("Camila", 24, 20000, "10%");
console.log(cuenta.retirar(1000));
console.log(cuenta.esTitularValido());
console.log(cuenta.mostrar());
cuenta1 = new CuentaJoven("Camilo ", 14, 20000, "20%");
console.log(cuenta1.retirar(1000));
console.log(cuenta1.esTitularValido());
console.log(cuenta1.mostrar());