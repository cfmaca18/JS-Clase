class BisabuelosPaternos{
    constructor(nombre1, nombre2, edad1, edad2){
        this.nombre1=nombre1;
        this.edad1=edad1;
        this.nombre2=nombre2;
        this.edad2=edad2;
    }
    ser(){
        console.log("Mi bisabuela paterna es " + this.nombre1 + " y su edad es "+ this.edad1 + " años.");
        console.log("Mi bisabuelo paterno es " + this.nombre2 + " y su edad es "+ this.edad2 + " años.");
        }
    }
class AbuelosPaternos extends BisabuelosPaternos{
    constructor(nombre1, nombre2, edad1, edad2, estatura1, estatura2){
        super (nombre1, nombre2, edad1, edad2);
        this.estatura1=estatura1;
        this.estatura2=estatura2;

    }
    ser_abuelos(){
        console.log("Mi abuela paterna es " + this.nombre1 + ", su edad es " + this.edad1 + " y su estatura es " + this.estatura1)
        console.log("Mi abuelo paterno es " + this.nombre2 + ", su edad es " + this.edad2 + " y su estatura es " + this.estatura2)

    }
}
class Padres extends BisabuelosPaternos{
    constructor(nombre1, nombre2, edad1, edad2, peso1, peso2){
        super (nombre1, nombre2, edad1, edad2);
        this.peso1=peso1;
        this.peso2=peso2;    
}
    ser_padres(){
        console.log("Mi Madre es " + this.nombre1 + ", su edad es " + this.edad1 + " años y su peso es " + this.peso1 + "kg")
        console.log("Mi padre es " + this.nombre2 + ", su edad es " + this.edad2 + " años y su peso es " + this.peso2 + "kg")
    }
}
class TiosPaternos extends BisabuelosPaternos{
    constructor (nombre1, edad1, estado1){
        super (nombre1, edad1);
        this.estado1=estado1;
    }
    ser_tios(){
        console.log("Mi tia es " + this.nombre1 + " su edad es " + this.edad1 + " años y su estado civil es " + this.estado1)
    }
}
    let a=new BisabuelosPaternos ("Licenia", "Lauro", 85, 90)
    let b=new AbuelosPaternos ("Margarita", "Pablo", 59, 58, 1.63, 1.66)
    let c=new Padres("Jazmin", "Ivan", 40, 39, 70, 80)
    let d=new TiosPaternos("Tatiana", "23","comprometida")
    console.log(a.ser())
    console.log(b.ser_abuelos())
    console.log(c.ser_padres())
    console.log(d.ser_tios())
    
