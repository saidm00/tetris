/*
const main = (): int =>
{
    const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#canvas");

    Tetris.initialize(canvas);

    Tetris.play();

    return new int(0);
}
*/

function uint8_t (val: number)
{
    this.data = new ArrayBuffer(1);
    this.data_view = new DataView(this.data, 0, 1);
    this.setValue(val);
}

uint8_t.prototype.setValue = function (rhs: number)
{
    this.data_view.setUint8(0, rhs);
}

uint8_t.prototype.valueOf = function (rhs: number)
{
    return this.data_view.getUint8(0);
}

let x = new int32(25);
let y = new int32(5);
let z = x + y;

console.log(z);

//main(); // Entry point