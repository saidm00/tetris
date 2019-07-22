class WebGLRendererObject {
}
class Texture2D extends WebGLRendererObject {
}
class WebGLRenderer {
    constructor(canvas) {
        this._gl = canvas.getContext("webgl");
        if (this._gl == null)
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
    createTexture(name, image) {
        let gl = this._gl;
        let tex = gl.createTexture();
        if (tex == null)
            throw new Error("Failed to create texture!");
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, 0);
        let id = this._textures.setValue(name, tex);
        return id;
    }
    /*
    createTexture (pixels: Uint8Array, width: number, height: number): TextureID
    {

    }*/
    clearColor(color) {
        let gl = this._gl;
        gl.clearColor(color.r, color.g, color.b, color.a);
    }
    clear() {
        let gl = this._gl;
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
}
//renderer.createTextureFromImage(image);
//# sourceMappingURL=renderer_impl_webgl.js.map