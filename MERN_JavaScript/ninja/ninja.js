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


ninja1 = new Ninja("Sofia", 120);

ninja1.sayName();
ninja1.drinkSake();

console.log(ninja1);


