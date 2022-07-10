let typeString: string = "Hello world";
let typeNumber: number = 1;
let typeBoolean: boolean = true;
let typeAny: any = "Hello world";
let typeNull: null = null;
let typeUndefined: undefined = undefined;
let typeVoid: void = undefined;
let typeObject: object = {};
let typeArray: Array<number> = [1, 2, 3];
let oTypeArray: number[] = [1, 2, 3];
let typeTuple: [number, string, boolean] = [1, "Hello world", true];

let typeTupleArray: [number, string, boolean][] = [
    [1, "Hello world", true],
    [2, "Bye world", false],
];

let typeUnion: number | string = 1;
let typeLiteral: "A" | "B" = "A";
let typeNullable: number | null = 1;

//Inferencia de tipos
let typeInference;
typeInference = 1;

let typeInference_1: string;
typeInference_1 = "Hello world";

let typeInference_2 = 5;

//Composicion de tipos
//El ejemplo de abajo se podria utilizar cuando estamos extrayendo datos de una api
let typeComposition: string | number | null = "Hello world";
