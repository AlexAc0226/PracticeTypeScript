//Type assertion

//Forma 1
let channel : any = "Alexander";
let channelStr = <string>channel

//Forma 2
let channelStr2 = channel as string;

//const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("canvas");