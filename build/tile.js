class TileSet {
    constructor(imageSrc, rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.image = new Image();
        this.image.src = imageSrc;
    }
    get isComplete() {
        return this.image.complete;
    }
}
class Tile {
    constructor(tileSet, x, y) {
        this._tileSet = tileSet;
        this.image = tileSet.image;
        this.sx = (Math.floor(x) % tileSet.rows) * this.image.width;
        this.sy = (Math.floor(y) % tileSet.cols) * this.image.height;
        this.sw = 1 / tileSet.rows;
        this.sh = 1 / tileSet.cols;
    }
}
//# sourceMappingURL=tile.js.map