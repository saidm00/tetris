class ColorRGBA {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    getString() {
        let _r, _g, _b, _a;
        _r = clamp(this.r, 0, 1) * 255;
        _g = clamp(this.g, 0, 1) * 255;
        _b = clamp(this.b, 0, 1) * 255;
        _a = clamp(this.a, 0, 1);
        return "rgba(" + _r + ", " + _g + ", " + _b + ", " + _a + ")";
    }
}
class ColorRGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    getString() {
        let _r, _g, _b;
        _r = clamp(this.r, 0, 1) * 255;
        _g = clamp(this.g, 0, 1) * 255;
        _b = clamp(this.b, 0, 1) * 255;
        return "rgb(" + _r + ", " + _g + ", " + _b + ")";
    }
    static fromHex(x) {
        let _r = x & 0xFF;
        let _g = (x >> 8) & 0xFF;
        let _b = (x >> 16) & 0xFF;
        return ColorRGB.fromRGB8(_r, _g, _b);
    }
    static fromRGB8(r, g, b) {
        return new ColorRGB(r / 255, g / 255, b / 255);
    }
}
//# sourceMappingURL=renderer.js.map