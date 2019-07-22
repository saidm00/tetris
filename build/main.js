var canvas;
var gameplayer;
const main = () => {
    canvas = document.querySelector("#canvas");
    gameplayer = new Gameplayer(canvas);
    let game = new Game(new uint32(42));
    gameplayer.play(game);
    return new int(0);
};
let code = main(); // Entry point
console.log("The program has exited with code " + code);
//# sourceMappingURL=main.js.map