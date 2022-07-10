

class Person {
    public zone = 'America'; //Se puede acceder desde cualquier scope
    protected city = 'New York'; //Solo se puede acceder a esta propiedad SOLO SI EXTENDEMOS DE ESTA CLASE
    private country = 'USA'; //Sole se puede acceder desde la clase que se declaro, desde ningun otro lugar

    constructor(){

    }

    greet(): void {
        console.log('Class person');
    }
}

class Employee extends Person {
    //Atributos
    //Forma: asignacion NO AUTOMATICA
    // private id: number;
    // private name: string;
    // private depto: string;
    
    constructor( private readonly id: number, private name: string, private depto: string ){
        //readonly: solo se puede leer, no se puede modificar
        
        //Lo que esta debajo NO ES LA ASIGNACION AUTOMATICO
        //Asignacion automatica es cuando se restringen directamente los parametros del constructor
        
        // this.id = id;
        // this.name = name;
        // this.depto = depto;
        super();
        this.showInfo();
    };

    //Metodos
    private showInfo(): void{
        console.log(`${this.name} - ${this.depto} - ${this.zone} - ${this.city}`);
    };
};

let empleado = new Employee(1, "Alex", "IT");
