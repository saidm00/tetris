function logInfo(message) {
    console.log("[INFO]: " + message);
}
function getTick() {
    return window.performance.now();
}
function getTime() {
    return getTick() / 1000;
}
var Tetris;
(function (Tetris) {
    let renderer;
    let loopID;
    const TICKS_PER_SECOND = 60.0988;
    const SKIP_TICKS = 1000 / TICKS_PER_SECOND;
    const MAX_FRAMESKIP = new int(10);
    var nextTick;
    var level = new uint8(0x1);
    let bagRandomizer;
    function getLevelGravity(level) {
        if (level == 0)
            return 48;
        else if (level == 1)
            return 43;
        else if (level == 2)
            return 38;
        else if (level == 3)
            return 33;
        else if (level == 4)
            return 28;
        else if (level == 5)
            return 23;
        else if (level == 6)
            return 18;
        else if (level == 7)
            return 13;
        else if (level == 8)
            return 8;
        else if (level == 9)
            return 6;
        else if (level >= 10 && level <= 12)
            return 5;
        else if (level >= 13 && level <= 15)
            return 4;
        else if (level >= 16 && level <= 18)
            return 3;
        else if (level >= 19 && level <= 29)
            return 2;
        else if (level >= 29)
            return 1;
    }
    const BLOCK_PALETTE_COUNT = 10;
    function getLevelBlockPalette(level) {
        return (level % BLOCK_PALETTE_COUNT);
    }
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
    class TetrominoBlock {
        constructor() {
            this.flagGhost = false; // non visible or collidable
        }
        draw(pos, scl) {
            if (this.flagGhost === false) {
                //renderer.fillColor (new ColorRGBA(1, 1, 1, 1));
                //renderer.fillRect (pos, scl);
            }
        }
    }
    class Transform {
        constructor(x, y, w, h) {
            this.position = new Vector(x, y);
            this.scale = new Vector(w, h);
        }
    }
    class TetrominoBox extends Transform {
        constructor(width, height) {
            super(0, 0, 1, 1);
            this.width = width;
            this.height = height;
            this.aspect = width / height;
            let size = width * height;
            this.blocks = new Array(size);
            this.blockCount = size;
            for (let i = 0; i < size; ++i) {
                this.blocks[i] = new TetrominoBlock();
                this.blocks[i].flagGhost = true;
            }
        }
        getBlockPosition(position) {
            let s = Vector.mul(this.scale, new Vector(this.aspect, 1));
            return Vector.mul(Vector.sub(Vector.mul(Vector.div(position, new Vector(this.width, this.height)), new Vector(2, 2)), new Vector(1, 1)), s);
        }
        getBlockScale() {
            let s = Vector.mul(this.scale, new Vector(this.aspect, 1));
            return Vector.mul(Vector.div(new Vector(2, 2), new Vector(this.width, this.height)), s);
        }
        draw() {
            for (let i = 0; i < this.blockCount; i++) {
                let pos = this.getBlockPosition(new Vector(Math.floor(i % this.width), Math.floor(i / this.width)));
                let scl = this.getBlockScale();
                this.blocks[i].draw(pos, scl);
            }
        }
        debugDraw() {
            let i;
            let s = Vector.mul(this.scale, new Vector(this.aspect, 1));
            //renderer.lineWidth(3);
            //renderer.strokeColor(new ColorRGBA(1, 1, 1, 1));
            for (i = 0; i <= this.width; ++i) {
                let x = (i / this.width * 2 - 1) * s.x;
                let x0 = new Vector(x, -s.y), x1 = new Vector(x, s.y);
                //renderer.drawLine(x0, x1);
            }
            for (i = 0; i <= this.height; ++i) {
                let y = (i / this.height * 2 - 1) * s.y;
                let x0 = new Vector(-s.x, y), x1 = new Vector(s.x, y);
                //renderer.drawLine(x0, x1);
            }
        }
        containsPoint(point) {
            return point.x < this.width && point.x >= 0 && point.y < this.height && point.y >= 0;
        }
        collideTetromino(tetromino, yOffset) {
            let positions = tetromino.blockPositions;
            for (let i = 0; i < positions.length; ++i) {
                let pos = Vector.add(positions[i], new Vector(0, yOffset));
                let index = pos.y * this.width + pos.x;
                let hit = false;
                if (this.containsPoint(pos))
                    hit = this.blocks[index].flagGhost === false;
                else if (pos.y < 0)
                    hit = true;
                console.log(hit);
                if (hit === true)
                    return true;
            }
            return false;
        }
        placeTetromino(tetromino) {
            let positions = tetromino.blockPositions;
            for (let i = 0; i < positions.length; ++i) {
                let position = positions[i];
                let index = position.y * this.width + position.x;
                if (this.containsPoint(position)) {
                    this.blocks[index] = tetromino.blocks[i];
                }
            }
        }
    }
    class Tetromino {
        get blockPositions() {
            let positions = new Array(4);
            for (let i = 0; i < 4; ++i) {
                positions[i] = Vector.add(this.position, this.blockOffsets[i]);
            }
            return positions;
        }
        constructor(shape, x, y) {
            this.flagHit = false;
            this.tickCounter = new TickCounter();
            this.position = new Vector(x, y);
            this.shape = shape;
            this.blockOffsets = new Array(4);
            if (this.shape == Tetris.TetrominoShape.I) {
                this.blockOffsets[0] = new Vector(0, 0);
                this.blockOffsets[1] = new Vector(1, 0);
                this.blockOffsets[2] = new Vector(2, 0);
                this.blockOffsets[3] = new Vector(3, 0);
            }
            else if (this.shape == Tetris.TetrominoShape.O) {
                this.blockOffsets[0] = new Vector(0, 0);
                this.blockOffsets[1] = new Vector(0, 1);
                this.blockOffsets[2] = new Vector(1, 0);
                this.blockOffsets[3] = new Vector(1, 1);
            }
            else if (this.shape == Tetris.TetrominoShape.T) {
                this.blockOffsets[0] = new Vector(1, 0);
                this.blockOffsets[1] = new Vector(0, 1);
                this.blockOffsets[2] = new Vector(1, 1);
                this.blockOffsets[3] = new Vector(2, 1);
            }
            else if (this.shape == Tetris.TetrominoShape.J) {
                this.blockOffsets[0] = new Vector(2, 0);
                this.blockOffsets[1] = new Vector(0, 1);
                this.blockOffsets[2] = new Vector(1, 1);
                this.blockOffsets[3] = new Vector(2, 1);
            }
            else if (this.shape == Tetris.TetrominoShape.L) {
                this.blockOffsets[0] = new Vector(0, 0);
                this.blockOffsets[1] = new Vector(0, 1);
                this.blockOffsets[2] = new Vector(1, 1);
                this.blockOffsets[3] = new Vector(2, 1);
            }
            else if (this.shape == Tetris.TetrominoShape.S) {
                this.blockOffsets[0] = new Vector(0, 0);
                this.blockOffsets[1] = new Vector(1, 0);
                this.blockOffsets[2] = new Vector(1, 1);
                this.blockOffsets[3] = new Vector(2, 1);
            }
            else if (this.shape == Tetris.TetrominoShape.Z) {
                this.blockOffsets[0] = new Vector(1, 0);
                this.blockOffsets[1] = new Vector(2, 0);
                this.blockOffsets[2] = new Vector(0, 1);
                this.blockOffsets[3] = new Vector(1, 1);
            }
            this.blocks = new Array(4);
            for (let i = 0; i < 4; ++i) {
                //blocks[i] = new TetrominoBlock(0, getLevelBlockPalette(currentLevel));
                this.blocks[i] = new TetrominoBlock();
                this.blocks[i].flagGhost = false;
            }
            //console.log(blocks);
        }
        draw(box) {
            let blockPositions = this.blockPositions;
            let blocks = this.blocks;
            for (let i = 0; i < 4; ++i) {
                let pos = box.getBlockPosition(blockPositions[i]);
                let scl = box.getBlockScale();
                //console.log(pos);
                //console.log(scl);
                blocks[i].draw(pos, scl);
            }
        }
        _update(tetrominoBox) {
            let yOffset = -1;
            if (tetrominoBox.collideTetromino(this, yOffset)) {
                this.flagHit = true;
            }
            else {
                this.position.y += yOffset;
            }
        }
        update(tetrominoBox) {
            this.tickCounter.update(1);
            let gravity = getLevelGravity(level);
            if (this.tickCounter.needsReset(gravity.value)) {
                this.tickCounter.reset(gravity.value);
                this._update(tetrominoBox);
            }
        }
    }
    let tetrominoBox;
    //let currentPick: TetrominoShape;
    //let nextPick: TetrominoShape;
    let tetromino;
    function nextTetromino() {
        //tetrominoBox.placeTetromino(currentTetromino);
        //if (nextPick = undefined) nextPick = randomizer.pick();
        //tetromino = new Tetromino(nextPick, tetrominoBox.width/2, tetrominoBox.height);
        //currentPick = nextPick;
        //nextPick = randomizer.pick();
        tetromino = new Tetromino(bagRandomizer.pick(), tetrominoBox.width / 2, tetrominoBox.height);
    }
    function draw() {
        renderer.clearColor(new ColorRGBA(0, 0, 0, 1));
        renderer.clear();
        //tetromino.draw(tetrominoBox);
        //tetrominoBox.draw();
        //tetrominoBox.debugDraw();
    }
    function update() {
        if (tetromino.flagHit === true) {
            tetrominoBox.placeTetromino(tetromino);
            nextTetromino();
        }
        else {
            tetromino.update(tetrominoBox);
        }
    }
    function mainLoop() {
        draw();
        let loops = 0;
        while (getTick() > nextTick.value && loops < MAX_FRAMESKIP.value) {
            //update();
            nextTick.value += SKIP_TICKS;
            ++loops;
        }
    }
    function play() {
        nextTetromino();
        nextTick.value = getTick();
        loopID = setInterval(mainLoop, 0);
    }
    Tetris.play = play;
    function replay(gameplay) {
        // replay gameplay somehow...
    }
    Tetris.replay = replay;
    function initialize(canvas) {
        renderer = new WebGLRenderer(canvas);
        bagRandomizer = new Tetris.BagRandomizer(0);
        tetrominoBox = new TetrominoBox(10, 20);
    }
    Tetris.initialize = initialize;
})(Tetris || (Tetris = {}));
//# sourceMappingURL=game.js.map