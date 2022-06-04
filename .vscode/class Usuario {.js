class Usuario {
    constructor (nombre, genero, documento, edad, correo, telefono) {
       
        this.nombre;
        this.genero;
        this.documento;
        this.edad;
        this.correo;
        this.telefono;
    }
    empleo(){      //setters
        return (this.empleo);
    }
    generousuario(){
        return (this.genero)
    }
}

let a=new Usuario ("Felipe, M, 123, 12, correo@, 211212122");
a.empleo();
a.generousuario();
let b=new Usuario ("Cristian, M, 1232, 15, correo1@, 21121212122");
b.genero();
b.generousuario();
console.log(a);

