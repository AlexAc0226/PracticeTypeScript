// import { PI } from './myModules';
// import { Person as InterfacePerson } from './myModules';
// import { genereteNumbersRamdom } from './myModules';
import * as myCode from './myModules';

let user: myCode.Person = {
    id: 1,
    name: 'Alex',
};

console.log(myCode.PI);
console.log(user);
console.log(myCode.genereteNumbersRamdom(1, 10));
