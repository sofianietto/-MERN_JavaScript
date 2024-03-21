class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }

    drinkSake(){
        this.salud += 10;
    }

    showState(){
        console.log(
        'nombre: ' + this.nombre
        + ' , salud: ' + this.salud 
        + ' , velocidad: ' + this.velocidad 
        + ' , fuerza: ' + this.fuerza);
    }
}

class Sensei extends Ninja{
    constructor(nombre, salud,){
        super(nombre, salud);
        this.sabiduria = 10;
    }

    drinkSake(){
        this.salud += 10;
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showState(){
        console.log(
        'nombre: ' + this.nombre
        + ' , salud: ' + this.salud 
        + ' , velocidad: ' + this.velocidad 
        + ' , fuerza: ' + this.fuerza
        + ' , sabiduria: ' + this.sabiduria);
    }


}
sensei1 = new Sensei("Sofia", 120);

sensei1.drinkSake();
sensei1.speakWisdom();
sensei1.showState();

console.log(sensei1);