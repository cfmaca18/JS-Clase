class Motos {
    constructor (Marca, Modelo, Color) {
        this.Marca=Marca;
        this.Modelo=Modelo;
        this.Color=Color;
    }
     captura(){
        a=document.getElementById("Marca").ariaValueText;
        return (this.Marca)
       
    }
       captura2(){
        b=document.getElementById("Modelo").ariaValueText;
        return (this.Modelo)
       
       }
       captura3(){
        c=document.getElementById("Color").ariaValueText;
        return (this.Color)
       
       
    }
}
    
 let b= new Motos(document.getElementById);
//  a.captura();
//  b.captura2();
//  c.captura3();
console.log(b)
//alert(Motos)