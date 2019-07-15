class Surface {
    get aspect() { return this.width / this.height; }
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvas = canvas;
    }
}
//# sourceMappingURL=surface.js.map