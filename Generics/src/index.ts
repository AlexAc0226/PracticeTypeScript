
//Generic
interface Person {
    id: number;
    name: string;
    age?: number;
};

interface Employee extends Person {
    role: string;
};

interface Products {
    id: number;
    name: string;
    price: number;
};

//<T> quiere decir que es un tipo generico
interface Data<T>{
    addItem(newItem: T): void
}

//type dataType = Person | Products;

//<T> quiere decir que es de tipo generica, y T es el tipo que se le asigna, osea, toma el tipo que en el momento estemos necesitando, no sera de un tipo en especifico

class DataCollection<T extends /* Person | Employee */ { id: number, name: string}> implements Data<T> {
    //Nota: implements quiere decir que esta clase debe implementar de manera OBLIGATORIA las propiedades o metodos que se encuentran en la interface, en este caso la interface Data
    
    //Otra forma es que en todas las T se reemplaza por un tipo generico, y se le asigna un tipo que se le pase como parametro, ej: dataType

    private items: Array<T> = [];

    addItem(item: T): void {
        this.items.push(item);
    };
    getItems(): void {
        console.log(this.items);
    };
    getNames(): string{
        let names = this.items.map((item) => item.name).join(', ');;
        return names;
    };
    getItemsById(id: number): T | undefined {
        //Aquí retorna un tipo Person, ya que estaremos devolviendo una dataTypea
        return this.items.find((item: T) => item.id === id);
    };   
};

const productsCollections = new DataCollection<Products>();
const personCollection = new DataCollection<Person>();

const newProduct = { id: 1, name: 'PC', price: 100 };
productsCollections.addItem(newProduct);
productsCollections.getItems();

const newPerson = { id: 1, name: 'Alex', age: 26 };
personCollection.addItem(newPerson);
personCollection.getItems();

  
const allNames = personCollection.getNames();
const allProducts = productsCollections.getNames();

console.log(allNames);
console.log(allProducts);

const userById = personCollection.getItemsById(1);
const productById = productsCollections.getItemsById(1);
console.log(userById); 
console.log(productById);
 
