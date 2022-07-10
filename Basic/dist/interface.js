"use strict";
;
////
const book = {
    id: 1,
    title: 'Harry Potter',
    autor: 'J.K. Rowling'
};
////
const book2 = [];
const book3 = [];
////
function getBook() {
    return { id: 1, title: 'Harry Potter', autor: 'J.K. Rowling' };
}
;
////
function getBookk(id, title, autor, coAutor) {
    return { id, title, autor };
}
;
//////
const newBook = {
    id: 1,
    title: 'Harry Potter',
    autor: 'J.K. Rowling',
    coAutor: 'A.A Correa'
};
function createBook(book) {
    return book;
}
;
console.log(createBook(newBook));
