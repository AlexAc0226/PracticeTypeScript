//VARIABLE
export const PI = 3.14;

//INTERFACE
export interface Person {
    id: number;
    name: string;
    lastName?: string;
};

//FUNCION
export function genereteNumbersRamdom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

