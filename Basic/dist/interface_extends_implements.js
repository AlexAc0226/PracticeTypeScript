"use strict";
;
;
//Las propiedades id y name son extendidas en Employee y Customer de la interface Persom
//Es decir, Employee y Customer tienen las propiedades id y name de Persom, aunque no se las agreguen 
const cust = {
    id: 2,
    name: 'Alex',
    country: 'USA'
};
class Zoo {
    constructor() {
        this.name = 'Zoo';
    }
    getDog() {
        console.log('Dog');
    }
    //Opcional 
    getCat() {
        console.log('Cat');
    }
}
