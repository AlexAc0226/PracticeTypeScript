"use strict";
class Person {
    constructor() {
        this.zone = 'America'; //Se puede acceder desde cualquier scope
        this.city = 'New York'; //Solo se puede acceder a esta propiedad SOLO SI EXTENDEMOS DE ESTA CLASE
        this.country = 'USA'; //Sole se puede acceder desde la clase que se declaro, desde ningun otro lugar
    }
    greet() {
        console.log('Class person');
    }
}
class Employee extends Person {
    //Atributos
    //Forma: asignacion NO AUTOMATICA
    // private id: number;
    // private name: string;
    // private depto: string;
    constructor(id, name, depto) {
        //readonly: solo se puede leer, no se puede modificar
        //Lo que esta debajo NO ES LA ASIGNACION AUTOMATICO
        //Asignacion automatica es cuando se restringen directamente los parametros del constructor
        // this.id = id;
        // this.name = name;
        // this.depto = depto;
        super();
        this.id = id;
        this.name = name;
        this.depto = depto;
        this.showInfo();
    }
    ;
    //Metodos
    showInfo() {
        console.log(`${this.name} - ${this.depto} - ${this.zone} - ${this.city}`);
    }
    ;
}
;
let empleado = new Employee(1, "Alex", "IT");
