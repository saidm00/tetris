/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game, Gameplayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gameplayer\", function() { return Gameplayer; });\nfunction logInfo(message) {\r\n    console.log(\"[INFO]: \" + message);\r\n}\r\nfunction getTick() {\r\n    return window.performance.now();\r\n}\r\nfunction getTime() {\r\n    return getTick() / 1000;\r\n}\r\nvar Game = /** @class */ (function () {\r\n    function Game(seed) {\r\n        if (seed === undefined) {\r\n            this.seed = new uint32(0);\r\n        }\r\n        else {\r\n            this.seed = seed;\r\n        }\r\n        this.randomizer = new RandomizerBag(this.seed);\r\n    }\r\n    return Game;\r\n}());\r\nvar Gameplayer = /** @class */ (function () {\r\n    function Gameplayer(canvas, data) {\r\n        this.renderer = new WebGLRenderer(canvas);\r\n        this.renderer.clearColor(new ColorRGBA(0, 0, 0, 1));\r\n        //this.renderer.createTexture(<HTMLImageElement> data);\r\n    }\r\n    Gameplayer.prototype.draw = function () {\r\n        this.renderer.clear();\r\n    };\r\n    Gameplayer.prototype.mainLoop = function () {\r\n        this.draw();\r\n    };\r\n    Gameplayer.prototype.play = function (game) {\r\n        var _this = this;\r\n        this.loopID = setInterval(function () { _this.mainLoop(); }, 0);\r\n    };\r\n    Gameplayer.prototype.replay = function (gameplay) {\r\n    };\r\n    return Gameplayer;\r\n}());\r\n\r\n/*\r\nlet loopID: number;\r\n\r\nconst TICKS_PER_SECOND: number = 60.0988;\r\nconst SKIP_TICKS: number = 1000 / TICKS_PER_SECOND;\r\nconst MAX_FRAMESKIP: int = new int(10);\r\n\r\nvar nextTick: int;\r\n\r\nvar level: uint8 = new uint8(0x1);\r\n\r\nlet bagRandomizer: BagRandomizer;\r\n\r\nfunction getLevelGravity (level: uint8): uint8\r\n{\r\n    if (level == 0) return 48;\r\n    else if (level == 1) return 43;\r\n    else if (level == 2) return 38;\r\n    else if (level == 3) return 33;\r\n    else if (level == 4) return 28;\r\n    else if (level == 5) return 23;\r\n    else if (level == 6) return 18;\r\n    else if (level == 7) return 13;\r\n    else if (level == 8) return 8;\r\n    else if (level == 9) return 6;\r\n    else if (level >= 10 && level <= 12) return 5;\r\n    else if (level >= 13 && level <= 15) return 4;\r\n    else if (level >= 16 && level <= 18) return 3;\r\n    else if (level >= 19 && level <= 29) return 2;\r\n    else if (level >= 29) return 1;\r\n}\r\n\r\nconst BLOCK_PALETTE_COUNT: number = 10;\r\n\r\nfunction getLevelBlockPalette (level: number): number\r\n{\r\n    return (level % BLOCK_PALETTE_COUNT);\r\n}\r\n*/\r\n/*\r\nlet colorTable: Array<ColorRGB> = new Array<ColorRGB>(\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n    ColorRGB.fromHex(0x000000),\r\n);\r\n\r\nfunction getColorRGBAFromIdx (idx: number): ColorRGBA\r\n{\r\n    return colorTable[Math.floor(idx) % colorTable.length];\r\n}\r\n\r\n*/\r\n/*\r\n\r\nclass TetrominoBlock\r\n{\r\n    public flagGhost: boolean;\r\n\r\n    constructor ()\r\n    {\r\n        this.flagGhost = false; // non visible or collidable\r\n    }\r\n\r\n    public draw (pos: Vector, scl: Vector): void\r\n    {\r\n        if (this.flagGhost === false)\r\n        {\r\n            //renderer.fillColor (new ColorRGBA(1, 1, 1, 1));\r\n            //renderer.fillRect (pos, scl);\r\n        }\r\n    }\r\n}\r\n\r\nclass Transform\r\n{\r\n    public position: Vector;\r\n    public scale: Vector;\r\n    constructor (x: number, y: number, w: number, h: number)\r\n    {\r\n        this.position = new Vector(x, y);\r\n        this.scale = new Vector(w, h);\r\n    }\r\n}\r\n\r\nclass TetrominoBox extends Transform\r\n{\r\n    public readonly width: number;\r\n    public readonly height: number;\r\n    public readonly aspect: number;\r\n    public readonly blocks: Array<TetrominoBlock>;\r\n    public readonly blockCount: number;\r\n\r\n    constructor (width: number, height: number)\r\n    {\r\n        super(0, 0, 1, 1);\r\n        this.width = width;\r\n        this.height = height;\r\n        this.aspect = width / height;\r\n\r\n        let size: number = width * height;\r\n        this.blocks = new Array<TetrominoBlock>(size);\r\n        this.blockCount = size;\r\n\r\n        for (let i: number = 0; i < size; ++i)\r\n        {\r\n            this.blocks[i] = new TetrominoBlock();\r\n            this.blocks[i].flagGhost = true;\r\n        }\r\n    }\r\n\r\n    public getBlockPosition (position: Vector): Vector\r\n    {\r\n        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));\r\n        return Vector.mul(Vector.sub(Vector.mul(Vector.div(position, new Vector(this.width, this.height)), new Vector(2, 2)), new Vector(1, 1)), s);\r\n    }\r\n\r\n    public getBlockScale (): Vector\r\n    {\r\n        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));\r\n        return Vector.mul(Vector.div(new Vector(2,2), new Vector(this.width, this.height)), s);\r\n    }\r\n\r\n    public draw (): void\r\n    {\r\n        for (let i: number = 0; i < this.blockCount; i++)\r\n        {\r\n            let pos: Vector = this.getBlockPosition(new Vector(Math.floor(i % this.width), Math.floor(i / this.width)));\r\n            let scl: Vector = this.getBlockScale();\r\n            this.blocks[i].draw(pos, scl);\r\n        }\r\n    }\r\n\r\n    public debugDraw () : void\r\n    {\r\n        let i : number;\r\n\r\n        let s : Vector = Vector.mul(this.scale, new Vector(this.aspect, 1));\r\n\r\n        //renderer.lineWidth(3);\r\n        //renderer.strokeColor(new ColorRGBA(1, 1, 1, 1));\r\n\r\n        for (i = 0; i <= this.width; ++i)\r\n        {\r\n            let x : number = (i / this.width * 2 - 1) * s.x;\r\n            let x0 : Vector = new Vector(x, -s.y), x1 : Vector = new Vector(x, s.y);\r\n            //renderer.drawLine(x0, x1);\r\n        }\r\n\r\n        for (i = 0; i <= this.height; ++i)\r\n        {\r\n            let y : number = (i / this.height * 2 - 1) * s.y;\r\n            let x0 : Vector = new Vector(-s.x, y), x1 : Vector = new Vector(s.x, y);\r\n            //renderer.drawLine(x0, x1);\r\n        }\r\n    }\r\n\r\n    public containsPoint (point: Vector): boolean\r\n    {\r\n        return point.x < this.width && point.x >= 0 && point.y < this.height && point.y >= 0;\r\n    }\r\n\r\n    public collideTetromino (tetromino: Tetromino, yOffset: number): boolean\r\n    {\r\n        let positions: Array<Vector> = tetromino.blockPositions;\r\n\r\n        for (let i: number = 0; i < positions.length; ++i)\r\n        {\r\n            let pos: Vector = Vector.add(positions[i], new Vector(0, yOffset));\r\n            let index: number = pos.y * this.width + pos.x;\r\n            \r\n            let hit: boolean = false;\r\n\r\n            if (this.containsPoint(pos)) hit = this.blocks[index].flagGhost === false;\r\n            else if (pos.y < 0) hit = true;\r\n            \r\n            console.log(hit);\r\n\r\n            if (hit === true) return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    public placeTetromino (tetromino: Tetromino)\r\n    {\r\n        let positions: Array<Vector> = tetromino.blockPositions;\r\n        \r\n        for (let i: number = 0; i < positions.length; ++i)\r\n        {\r\n            let position: Vector = positions[i];\r\n            let index: number = position.y * this.width + position.x;\r\n            if (this.containsPoint(position))\r\n            {\r\n                this.blocks[index] = tetromino.blocks[i];\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nclass Tetromino\r\n{\r\n    public readonly tickCounter: TickCounter;\r\n    public readonly shape: TetrominoShape;\r\n    public readonly position: Vector;\r\n    public readonly blockOffsets: Array<Vector>;\r\n    public flagHit: boolean;\r\n\r\n    public blocks: Array<TetrominoBlock>;\r\n    \r\n    public get blockPositions ()\r\n    {\r\n        let positions: Array<Vector> = new Array<Vector>(4);\r\n        for (let i: number = 0; i < 4; ++i)\r\n        {\r\n            positions[i] = Vector.add(this.position, this.blockOffsets[i]);\r\n        }\r\n\r\n        return positions;\r\n    }\r\n\r\n    constructor (shape: TetrominoShape, x: number, y: number)\r\n    {\r\n        this.flagHit = false;\r\n        this.tickCounter = new TickCounter();\r\n        this.position = new Vector(x, y);\r\n        this.shape = shape;\r\n        this.blockOffsets = new Array<Vector>(4);\r\n        \r\n        if (this.shape == TetrominoShape.I)\r\n        {\r\n            this.blockOffsets[0] = new Vector(0, 0);\r\n            this.blockOffsets[1] = new Vector(1, 0);\r\n            this.blockOffsets[2] = new Vector(2, 0);\r\n            this.blockOffsets[3] = new Vector(3, 0);\r\n        }\r\n        else if (this.shape == TetrominoShape.O)\r\n        {\r\n            this.blockOffsets[0] = new Vector(0, 0);\r\n            this.blockOffsets[1] = new Vector(0, 1);\r\n            this.blockOffsets[2] = new Vector(1, 0);\r\n            this.blockOffsets[3] = new Vector(1, 1);\r\n        }\r\n        else if (this.shape == TetrominoShape.T)\r\n        {\r\n            this.blockOffsets[0] = new Vector(1, 0);\r\n            this.blockOffsets[1] = new Vector(0, 1);\r\n            this.blockOffsets[2] = new Vector(1, 1);\r\n            this.blockOffsets[3] = new Vector(2, 1);\r\n        }\r\n        else if (this.shape == TetrominoShape.J)\r\n        {\r\n            this.blockOffsets[0] = new Vector(2, 0);\r\n            this.blockOffsets[1] = new Vector(0, 1);\r\n            this.blockOffsets[2] = new Vector(1, 1);\r\n            this.blockOffsets[3] = new Vector(2, 1);\r\n        }\r\n        else if (this.shape == TetrominoShape.L)\r\n        {\r\n            this.blockOffsets[0] = new Vector(0, 0);\r\n            this.blockOffsets[1] = new Vector(0, 1);\r\n            this.blockOffsets[2] = new Vector(1, 1);\r\n            this.blockOffsets[3] = new Vector(2, 1);\r\n        }\r\n        else if (this.shape == TetrominoShape.S)\r\n        {\r\n            this.blockOffsets[0] = new Vector(0, 0);\r\n            this.blockOffsets[1] = new Vector(1, 0);\r\n            this.blockOffsets[2] = new Vector(1, 1);\r\n            this.blockOffsets[3] = new Vector(2, 1);\r\n        }\r\n        else if (this.shape == TetrominoShape.Z)\r\n        {\r\n            this.blockOffsets[0] = new Vector(1, 0);\r\n            this.blockOffsets[1] = new Vector(2, 0);\r\n            this.blockOffsets[2] = new Vector(0, 1);\r\n            this.blockOffsets[3] = new Vector(1, 1);\r\n        }\r\n        \r\n        this.blocks = new Array<TetrominoBlock>(4);\r\n\r\n        for (let i: number = 0; i < 4; ++i)\r\n        {\r\n            //blocks[i] = new TetrominoBlock(0, getLevelBlockPalette(currentLevel));\r\n            this.blocks[i] = new TetrominoBlock();\r\n            this.blocks[i].flagGhost = false;\r\n        }\r\n\r\n        //console.log(blocks);\r\n\r\n    }\r\n\r\n    public draw (box: TetrominoBox): void\r\n    {\r\n        let blockPositions: Array<Vector> = this.blockPositions;\r\n        let blocks: Array<TetrominoBlock> = this.blocks;\r\n\r\n        for (let i: number = 0; i < 4; ++i)\r\n        {\r\n            let pos: Vector = box.getBlockPosition(blockPositions[i]);\r\n            let scl: Vector = box.getBlockScale();\r\n\r\n            //console.log(pos);\r\n            //console.log(scl);\r\n            \r\n            blocks[i].draw(pos, scl);\r\n        }\r\n    }\r\n\r\n    private _update (tetrominoBox: TetrominoBox): void\r\n    {\r\n        let yOffset: number = -1;\r\n        \r\n        if (tetrominoBox.collideTetromino(this, yOffset))\r\n        {\r\n            this.flagHit = true;\r\n        }\r\n        else\r\n        {\r\n            this.position.y += yOffset;\r\n        }\r\n    }\r\n\r\n    public update (tetrominoBox: TetrominoBox): void\r\n    {\r\n        this.tickCounter.update(1);\r\n\r\n        let gravity: uint8 = getLevelGravity(level);\r\n\r\n        if ( this.tickCounter.needsReset(gravity.value) )\r\n        {\r\n            this.tickCounter.reset(gravity.value);\r\n            this._update(tetrominoBox);\r\n        }\r\n    }\r\n}\r\n\r\nlet tetrominoBox: TetrominoBox;\r\n//let currentPick: TetrominoShape;\r\n//let nextPick: TetrominoShape;\r\nlet tetromino: Tetromino;\r\n\r\nfunction nextTetromino ()\r\n{\r\n    //tetrominoBox.placeTetromino(currentTetromino);\r\n    //if (nextPick = undefined) nextPick = randomizer.pick();\r\n    //tetromino = new Tetromino(nextPick, tetrominoBox.width/2, tetrominoBox.height);\r\n    //currentPick = nextPick;\r\n    //nextPick = randomizer.pick();\r\n    tetromino = new Tetromino(bagRandomizer.pick(), tetrominoBox.width/2, tetrominoBox.height);\r\n}\r\n\r\nfunction draw (): void\r\n{\r\n    renderer.clearColor(new ColorRGBA(0, 0, 0, 1));\r\n    renderer.clear();\r\n    \r\n    //tetromino.draw(tetrominoBox);\r\n    //tetrominoBox.draw();\r\n    //tetrominoBox.debugDraw();\r\n}\r\n\r\nfunction update (): void\r\n{\r\n    if (tetromino.flagHit === true)\r\n    {\r\n        tetrominoBox.placeTetromino(tetromino);\r\n        nextTetromino();\r\n    }\r\n    else\r\n    {\r\n        tetromino.update(tetrominoBox);\r\n    }\r\n}\r\n\r\nfunction mainLoop (): void\r\n{\r\n    draw();\r\n    \r\n    let loops: number = 0;\r\n\r\n    while ( getTick() > nextTick.value && loops < MAX_FRAMESKIP.value )\r\n    {\r\n        //update();\r\n\r\n        nextTick.value += SKIP_TICKS;\r\n        ++loops;\r\n    }\r\n}\r\n\r\n*/ \r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\r\nvar canvas;\r\nvar data;\r\nvar gameplayer;\r\nvar main = function () {\r\n    canvas = document.querySelector(\"#tetris_canvas\");\r\n    //data = <HTMLDataElement> document.querySelector(\"#default_data\");\r\n    //console.log(data);\r\n    //console.log(data.dataset);\r\n    gameplayer = new _game__WEBPACK_IMPORTED_MODULE_0__[\"Gameplayer\"](canvas, data);\r\n    var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](new uint32(0x42));\r\n    gameplayer.play(game);\r\n    return new int(0);\r\n};\r\nvar code = main(); // Entry point\r\nconsole.log(\"The program has exited with code \" + code);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });