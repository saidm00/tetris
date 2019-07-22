var canvas: HTMLCanvasElement;
var gameplayer: Gameplayer;

const main = (): int =>
{
    canvas = <HTMLCanvasElement> document.querySelector("#canvas");
    gameplayer = new Gameplayer(canvas);
    
    let game: Game = new Game(new uint32(42));

    gameplayer.play(game);

    return new int(0);
}

let code: int = main(); // Entry point
console.log("The program has exited with code " + code);