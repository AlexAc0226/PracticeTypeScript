
interface Persom {
    id: number,
    name: string,
};

//Interface comentada ya que interfiere con otro fichero
/* interface Employee extends Persom {
    dept: string
}; */

interface Customer extends Persom {
    country: string
};

//Las propiedades id y name son extendidas en Employee y Customer de la interface Persom
//Es decir, Employee y Customer tienen las propiedades id y name de Persom, aunque no se las agreguen 

const cust: Customer = {
    id: 2,
    name: 'Alex',
    country: 'USA'
};

////

interface Animal {
    name: string,
    getDog: ()=> void;
    getCat?: ()=> void;
}

class Zoo implements Animal {
    name = 'Zoo';
    getDog() {
        console.log('Dog');
    }

    //Opcional 
    getCat() {
        console.log('Cat');
    }
  
}
