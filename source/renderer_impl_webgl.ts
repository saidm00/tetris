class WebGLRendererObject
{
    public identifier: string;
}

class Texture2D extends WebGLRendererObject
{}

class WebGLRenderer implements Renderer
{
    private _gl: WebGLRenderingContext;
    private _textures: Hashtable<WebGLTexture>;

    constructor (canvas: HTMLCanvasElement)
    {
        this._gl = canvas.getContext("webgl");

        if (this._gl == null) throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
    
    public createTexture (name: string, image: HTMLImageElement): TextureID
    {
        let gl = this._gl;

        let tex: WebGLTexture = gl.createTexture();
        if (tex == null) throw new Error("Failed to create texture!");

        gl.bindTexture(gl.TEXTURE_2D, tex);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        
        gl.bindTexture(gl.TEXTURE_2D, 0);

        let id: TextureID = <TextureID> this._textures.setValueByKey(name, tex);

        return id;
    }
    /*
    createTexture (pixels: Uint8Array, width: number, height: number): TextureID
    {

    }*/

    public clearColor (color: ColorRGBA): void
    {
        let gl = this._gl;
        gl.clearColor(color.r, color.g, color.b, color.a);
    }

    public clear (): void
    {
        let gl = this._gl;
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
}

//renderer.createTextureFromImage(image);