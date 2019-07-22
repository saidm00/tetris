import { Gameplayer, Game } from "./game";

var canvas: HTMLCanvasElement;
var data: HTMLDataElement;
var gameplayer: Gameplayer;

const main = (): int =>
{
    canvas = <HTMLCanvasElement> document.querySelector("#tetris_canvas");
    //data = <HTMLDataElement> document.querySelector("#default_data");

    //console.log(data);
    //console.log(data.dataset);

    gameplayer = new Gameplayer(canvas, data);
    
    let game = new Game(new uint32(0x42));

    gameplayer.play(game);

    return new int(0);
}

let code: int = main(); // Entry point
console.log("The program has exited with code " + code);