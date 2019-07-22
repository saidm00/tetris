/*
class SoftwareRenderer
{
    private ctx : CanvasRenderingContext2D;
    private surface: Surface;

    private _initializeNDC (res: Vector): void
    {
        this.ctx.scale(res.x/2, res.y/2);
        this.ctx.translate(1, 1);
        //this.ctx.scale(.5, .5);
        //this.ctx.translate(-1, -1);
        this.ctx.scale(1, -1);
    }

    constructor (surface: Surface)
    {
        this.surface = surface;
        this.ctx = surface.canvas.getContext("2d");
        
       // this.ctx.imageSmoothingEnabled = false;

        let res: Vector = new Vector(surface.width, surface.height);
        this._initializeNDC(res);
    }
    
    public clear (color: ColorRGBA): void
    {
        this.ctx.fillStyle = color.getString();
        this.ctx.fillRect(-1, -1, 2, 2);
    }

    public strokeColor (color: ColorRGBA): void
    {
        this.ctx.strokeStyle = color.getString();
    }

    public lineWidth (w: number): void
    {
        this.ctx.lineWidth = w / this.surface.height * .5;
    }

    public fillColor (color: ColorRGBA): void
    {
        this.ctx.fillStyle = color.getString();
    }

    public drawLine (x0: Vector, x1: Vector): void
    {
        this.ctx.beginPath();
        this.ctx.moveTo(x0.x, x0.y);
        this.ctx.lineTo(x1.x, x1.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    
    public fillRect (p: Vector, b: Vector): void
    {
        this.ctx.fillRect(p.x, p.y, b.x, b.y);
    }
}
*/