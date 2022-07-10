
interface Book {
    id: number,
    title: string,
    autor: string,
    coAutor?: string,
    isLoan?: (id: number) => void 
};

////

const book: Book = {
    id: 1,
    title: 'Harry Potter',
    autor: 'J.K. Rowling'
};

////

const book2: Book[] = [];
const book3: Array<Book> = [];

////

function getBook(): Book {
    return {id: 1, title: 'Harry Potter', autor: 'J.K. Rowling'};
};

////

function getBookk(id:number, title:string, autor:string, coAutor?:string): Book {
    return {id, title, autor};
};

//////

const newBook: Book = {
    id: 1,
    title: 'Harry Potter',
    autor: 'J.K. Rowling',
    coAutor: 'A.A Correa'
};

function createBook(book: Book): Book {
    return book;
};

console.log(createBook(newBook));
