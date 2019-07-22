function logInfo(message) {
    console.log("[INFO]: " + message);
}
function getTick() {
    return window.performance.now();
}
function getTime() {
    return getTick() / 1000;
}
class Game {
    constructor(seed) {
        if (seed === undefined) {
            this.seed = new uint32(0);
        }
        else {
            this.seed = seed;
        }
        this.randomizer = new RandomizerBag(this.seed);
    }
}
class Gameplayer {
    //private gameplays: Array<Gameplay>;
    constructor(canvas) {
        this.renderer = new WebGLRenderer(canvas);
        this.renderer.clearColor(new ColorRGBA(0, 0, 0, 1));
    }
    mainLoop() {
        this.renderer.clear();
    }
    play(game) {
        let _this = this;
        this.loopID = setInterval(() => { _this.mainLoop(); }, 0);
    }
    replay(gameplay) {
    }
}
//export { Game, Gameplayer };
/*
let loopID: number;

const TICKS_PER_SECOND: number = 60.0988;
const SKIP_TICKS: number = 1000 / TICKS_PER_SECOND;
const MAX_FRAMESKIP: int = new int(10);

var nextTick: int;

var level: uint8 = new uint8(0x1);

let bagRandomizer: BagRandomizer;

function getLevelGravity (level: uint8): uint8
{
    if (level == 0) return 48;
    else if (level == 1) return 43;
    else if (level == 2) return 38;
    else if (level == 3) return 33;
    else if (level == 4) return 28;
    else if (level == 5) return 23;
    else if (level == 6) return 18;
    else if (level == 7) return 13;
    else if (level == 8) return 8;
    else if (level == 9) return 6;
    else if (level >= 10 && level <= 12) return 5;
    else if (level >= 13 && level <= 15) return 4;
    else if (level >= 16 && level <= 18) return 3;
    else if (level >= 19 && level <= 29) return 2;
    else if (level >= 29) return 1;
}

const BLOCK_PALETTE_COUNT: number = 10;

function getLevelBlockPalette (level: number): number
{
    return (level % BLOCK_PALETTE_COUNT);
}
*/
/*
let colorTable: Array<ColorRGB> = new Array<ColorRGB>(
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
    ColorRGB.fromHex(0x000000),
);

function getColorRGBAFromIdx (idx: number): ColorRGBA
{
    return colorTable[Math.floor(idx) % colorTable.length];
}

*/
/*

class TetrominoBlock
{
    public flagGhost: boolean;

    constructor ()
    {
        this.flagGhost = false; // non visible or collidable
    }

    public draw (pos: Vector, scl: Vector): void
    {
        if (this.flagGhost === false)
        {
            //renderer.fillColor (new ColorRGBA(1, 1, 1, 1));
            //renderer.fillRect (pos, scl);
        }
    }
}

class Transform
{
    public position: Vector;
    public scale: Vector;
    constructor (x: number, y: number, w: number, h: number)
    {
        this.position = new Vector(x, y);
        this.scale = new Vector(w, h);
    }
}

class TetrominoBox extends Transform
{
    public readonly width: number;
    public readonly height: number;
    public readonly aspect: number;
    public readonly blocks: Array<TetrominoBlock>;
    public readonly blockCount: number;

    constructor (width: number, height: number)
    {
        super(0, 0, 1, 1);
        this.width = width;
        this.height = height;
        this.aspect = width / height;

        let size: number = width * height;
        this.blocks = new Array<TetrominoBlock>(size);
        this.blockCount = size;

        for (let i: number = 0; i < size; ++i)
        {
            this.blocks[i] = new TetrominoBlock();
            this.blocks[i].flagGhost = true;
        }
    }

    public getBlockPosition (position: Vector): Vector
    {
        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));
        return Vector.mul(Vector.sub(Vector.mul(Vector.div(position, new Vector(this.width, this.height)), new Vector(2, 2)), new Vector(1, 1)), s);
    }

    public getBlockScale (): Vector
    {
        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));
        return Vector.mul(Vector.div(new Vector(2,2), new Vector(this.width, this.height)), s);
    }

    public draw (): void
    {
        for (let i: number = 0; i < this.blockCount; i++)
        {
            let pos: Vector = this.getBlockPosition(new Vector(Math.floor(i % this.width), Math.floor(i / this.width)));
            let scl: Vector = this.getBlockScale();
            this.blocks[i].draw(pos, scl);
        }
    }

    public debugDraw () : void
    {
        let i : number;

        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));

        //renderer.lineWidth(3);
        //renderer.strokeColor(new ColorRGBA(1, 1, 1, 1));

        for (i = 0; i <= this.width; ++i)
        {
            let x : number = (i / this.width * 2 - 1) * s.x;
            let x0 : Vector = new Vector(x, -s.y), x1 : Vector = new Vector(x, s.y);
            //renderer.drawLine(x0, x1);
        }

        for (i = 0; i <= this.height; ++i)
        {
            let y : number = (i / this.height * 2 - 1) * s.y;
            let x0 : Vector = new Vector(-s.x, y), x1 : Vector = new Vector(s.x, y);
            //renderer.drawLine(x0, x1);
        }
    }

    public containsPoint (point: Vector): boolean
    {
        return point.x < this.width && point.x >= 0 && point.y < this.height && point.y >= 0;
    }

    public collideTetromino (tetromino: Tetromino, yOffset: number): boolean
    {
        let positions: Array<Vector> = tetromino.blockPositions;

        for (let i: number = 0; i < positions.length; ++i)
        {
            let pos: Vector = Vector.add(positions[i], new Vector(0, yOffset));
            let index: number = pos.y * this.width + pos.x;
            
            let hit: boolean = false;

            if (this.containsPoint(pos)) hit = this.blocks[index].flagGhost === false;
            else if (pos.y < 0) hit = true;
            
            console.log(hit);

            if (hit === true) return true;
        }

        return false;
    }

    public placeTetromino (tetromino: Tetromino)
    {
        let positions: Array<Vector> = tetromino.blockPositions;
        
        for (let i: number = 0; i < positions.length; ++i)
        {
            let position: Vector = positions[i];
            let index: number = position.y * this.width + position.x;
            if (this.containsPoint(position))
            {
                this.blocks[index] = tetromino.blocks[i];
            }
        }
    }
}

class Tetromino
{
    public readonly tickCounter: TickCounter;
    public readonly shape: TetrominoShape;
    public readonly position: Vector;
    public readonly blockOffsets: Array<Vector>;
    public flagHit: boolean;

    public blocks: Array<TetrominoBlock>;
    
    public get blockPositions ()
    {
        let positions: Array<Vector> = new Array<Vector>(4);
        for (let i: number = 0; i < 4; ++i)
        {
            positions[i] = Vector.add(this.position, this.blockOffsets[i]);
        }

        return positions;
    }

    constructor (shape: TetrominoShape, x: number, y: number)
    {
        this.flagHit = false;
        this.tickCounter = new TickCounter();
        this.position = new Vector(x, y);
        this.shape = shape;
        this.blockOffsets = new Array<Vector>(4);
        
        if (this.shape == TetrominoShape.I)
        {
            this.blockOffsets[0] = new Vector(0, 0);
            this.blockOffsets[1] = new Vector(1, 0);
            this.blockOffsets[2] = new Vector(2, 0);
            this.blockOffsets[3] = new Vector(3, 0);
        }
        else if (this.shape == TetrominoShape.O)
        {
            this.blockOffsets[0] = new Vector(0, 0);
            this.blockOffsets[1] = new Vector(0, 1);
            this.blockOffsets[2] = new Vector(1, 0);
            this.blockOffsets[3] = new Vector(1, 1);
        }
        else if (this.shape == TetrominoShape.T)
        {
            this.blockOffsets[0] = new Vector(1, 0);
            this.blockOffsets[1] = new Vector(0, 1);
            this.blockOffsets[2] = new Vector(1, 1);
            this.blockOffsets[3] = new Vector(2, 1);
        }
        else if (this.shape == TetrominoShape.J)
        {
            this.blockOffsets[0] = new Vector(2, 0);
            this.blockOffsets[1] = new Vector(0, 1);
            this.blockOffsets[2] = new Vector(1, 1);
            this.blockOffsets[3] = new Vector(2, 1);
        }
        else if (this.shape == TetrominoShape.L)
        {
            this.blockOffsets[0] = new Vector(0, 0);
            this.blockOffsets[1] = new Vector(0, 1);
            this.blockOffsets[2] = new Vector(1, 1);
            this.blockOffsets[3] = new Vector(2, 1);
        }
        else if (this.shape == TetrominoShape.S)
        {
            this.blockOffsets[0] = new Vector(0, 0);
            this.blockOffsets[1] = new Vector(1, 0);
            this.blockOffsets[2] = new Vector(1, 1);
            this.blockOffsets[3] = new Vector(2, 1);
        }
        else if (this.shape == TetrominoShape.Z)
        {
            this.blockOffsets[0] = new Vector(1, 0);
            this.blockOffsets[1] = new Vector(2, 0);
            this.blockOffsets[2] = new Vector(0, 1);
            this.blockOffsets[3] = new Vector(1, 1);
        }
        
        this.blocks = new Array<TetrominoBlock>(4);

        for (let i: number = 0; i < 4; ++i)
        {
            //blocks[i] = new TetrominoBlock(0, getLevelBlockPalette(currentLevel));
            this.blocks[i] = new TetrominoBlock();
            this.blocks[i].flagGhost = false;
        }

        //console.log(blocks);

    }

    public draw (box: TetrominoBox): void
    {
        let blockPositions: Array<Vector> = this.blockPositions;
        let blocks: Array<TetrominoBlock> = this.blocks;

        for (let i: number = 0; i < 4; ++i)
        {
            let pos: Vector = box.getBlockPosition(blockPositions[i]);
            let scl: Vector = box.getBlockScale();

            //console.log(pos);
            //console.log(scl);
            
            blocks[i].draw(pos, scl);
        }
    }

    private _update (tetrominoBox: TetrominoBox): void
    {
        let yOffset: number = -1;
        
        if (tetrominoBox.collideTetromino(this, yOffset))
        {
            this.flagHit = true;
        }
        else
        {
            this.position.y += yOffset;
        }
    }

    public update (tetrominoBox: TetrominoBox): void
    {
        this.tickCounter.update(1);

        let gravity: uint8 = getLevelGravity(level);

        if ( this.tickCounter.needsReset(gravity.value) )
        {
            this.tickCounter.reset(gravity.value);
            this._update(tetrominoBox);
        }
    }
}

let tetrominoBox: TetrominoBox;
//let currentPick: TetrominoShape;
//let nextPick: TetrominoShape;
let tetromino: Tetromino;

function nextTetromino ()
{
    //tetrominoBox.placeTetromino(currentTetromino);
    //if (nextPick = undefined) nextPick = randomizer.pick();
    //tetromino = new Tetromino(nextPick, tetrominoBox.width/2, tetrominoBox.height);
    //currentPick = nextPick;
    //nextPick = randomizer.pick();
    tetromino = new Tetromino(bagRandomizer.pick(), tetrominoBox.width/2, tetrominoBox.height);
}

function draw (): void
{
    renderer.clearColor(new ColorRGBA(0, 0, 0, 1));
    renderer.clear();
    
    //tetromino.draw(tetrominoBox);
    //tetrominoBox.draw();
    //tetrominoBox.debugDraw();
}

function update (): void
{
    if (tetromino.flagHit === true)
    {
        tetrominoBox.placeTetromino(tetromino);
        nextTetromino();
    }
    else
    {
        tetromino.update(tetrominoBox);
    }
}

function mainLoop (): void
{
    draw();
    
    let loops: number = 0;

    while ( getTick() > nextTick.value && loops < MAX_FRAMESKIP.value )
    {
        //update();

        nextTick.value += SKIP_TICKS;
        ++loops;
    }
}

*/ 
//# sourceMappingURL=game.js.map