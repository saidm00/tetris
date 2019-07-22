interface Color 
{
    getString (): string;
}

class ColorRGBA implements Color
{
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor (r: number, g: number, b: number, a: number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public getString (): string
    {
        let _r: number, _g: number, _b: number, _a: number;
        _r = clamp(this.r, 0, 1) * 255;
        _g = clamp(this.g, 0, 1) * 255;
        _b = clamp(this.b, 0, 1) * 255;
        _a = clamp(this.a, 0, 1);

        return "rgba(" + _r + ", " + _g + ", " + _b + ", " + _a + ")";   
    }
}

class ColorRGB implements Color
{
    public r: number;
    public g: number;
    public b: number;

    constructor (r: number, g: number, b: number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public getString (): string
    {
        let _r: number, _g: number, _b: number;
        _r = clamp(this.r, 0, 1) * 255;
        _g = clamp(this.g, 0, 1) * 255;
        _b = clamp(this.b, 0, 1) * 255;

        return "rgb(" + _r + ", " + _g + ", " + _b + ")";   
    }

    static fromHex (x: number): ColorRGB
    {
        let _r: number = x & 0xFF;
        let _g: number = (x >> 8) & 0xFF;
        let _b: number = (x >> 16) & 0xFF;
        return ColorRGB.fromRGB8(_r, _g, _b);
    }

    static fromRGB8 (r: number, g: number, b: number): ColorRGB
    {
        return new ColorRGB(r / 255, g / 255, b / 255);    
    }
}

type TextureID = number;

interface Renderer
{
    clearColor (color: ColorRGBA): void;
    clear (): void;

    createTexture (name: string, image: HTMLImageElement): TextureID
    //createTexture (name: string, pixels: Uint8Array, width: number, height: number): TextureID;
    //createTextureFromImageHTML (img: HTMLImageElement): TextureID;
    //isTextureDownloadComplete (id: TextureID): boolean;
    //drawTexturedRect (texture: TextureID, srcPos: Vector, srcScl: Vector, dstPos: Vector, dstScl: Vector): void;
    //destroyTexture (id: TextureID): void;
}