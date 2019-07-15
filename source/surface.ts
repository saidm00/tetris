class Surface
{
    public readonly canvas: HTMLCanvasElement;
    public readonly width: number;
    public readonly height: number;
    
    get aspect(): number { return this.width / this.height; }
    
    constructor (canvas: HTMLCanvasElement)
    {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvas = canvas;
    }
}