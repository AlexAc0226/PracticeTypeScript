
function greet(name: string = "User"): void {
    console.log(`Hello ${name.toUpperCase()}`);
};
greet("alexander");

/* function getNumber(): number {
    //Retorna un numero aleatorio entre 0 y 100
    return Math.floor(Math.random() * 100); 
} 
console.log(getNumber())*/

/* function printPosition(position: {lat?: number | string, lng?: number | string}): void {
    //El signo de pregunta que esta pegado a la propiedad significa que es un parametro opcional
    //El | es como un || en javaScript

    if(!position.lat || !position.lng){
        console.log('Un parametro no fue pasado')
    }else console.log(`Lat: ${position.lat} - Lng: ${position.lng}`);
};
printPosition({lat: 2, lng: 3}); */