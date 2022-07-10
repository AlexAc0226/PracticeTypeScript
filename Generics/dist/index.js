"use strict";
;
;
;
//type dataType = Person | Products;
//<T> quiere decir que es de tipo generica, y T es el tipo que se le asigna, osea, toma el tipo que en el momento estemos necesitando, no sera de un tipo en especifico
class DataCollection {
    constructor() {
        //Nota: implements quiere decir que esta clase debe implementar de manera OBLIGATORIA las propiedades o metodos que se encuentran en la interface, en este caso la interface Data
        //Otra forma es que en todas las T se reemplaza por un tipo generico, y se le asigna un tipo que se le pase como parametro, ej: dataType
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    ;
    getItems() {
        console.log(this.items);
    }
    ;
    getNames() {
        let names = this.items.map((item) => item.name).join(', ');
        ;
        return names;
    }
    ;
    getItemsById(id) {
        //Aquí retorna un tipo Person, ya que estaremos devolviendo una dataTypea
        return this.items.find((item) => item.id === id);
    }
    ;
}
;
const productsCollections = new DataCollection();
const personCollection = new DataCollection();
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
