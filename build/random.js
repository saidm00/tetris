var Tetris;
(function (Tetris) {
    /*
        Based on: https://gist.github.com/blixt/f17b47c62508be59987b
    */
    class Randomizer {
        constructor(seed) {
            this._seed = seed % 2147483647;
            if (this._seed <= 0)
                this._seed += 2147483646;
        }
        // Returns a pseudo-random value between 1 and 2^32 - 2.
        nextInt() {
            return this._seed = this._seed * 16807 % 2147483647;
        }
        // Returns a pseudo-random floating point number in range [0, 1).        
        nextFloat() {
            // We know that result of next() will be 1 to 2147483646 (inclusive).
            return (this.nextInt() - 1) / 2147483646;
        }
    }
    let TetrominoShape;
    (function (TetrominoShape) {
        TetrominoShape[TetrominoShape["I"] = 0] = "I";
        TetrominoShape[TetrominoShape["O"] = 1] = "O";
        TetrominoShape[TetrominoShape["T"] = 2] = "T";
        TetrominoShape[TetrominoShape["J"] = 3] = "J";
        TetrominoShape[TetrominoShape["L"] = 4] = "L";
        TetrominoShape[TetrominoShape["S"] = 5] = "S";
        TetrominoShape[TetrominoShape["Z"] = 6] = "Z";
    })(TetrominoShape = Tetris.TetrominoShape || (Tetris.TetrominoShape = {}));
    class BagRandomizer extends Randomizer {
        constructor(seed) {
            super(seed);
            this._intializeBag();
        }
        _intializeBag() {
            this._bag = new Array(7);
            this._bag[0] = TetrominoShape.I;
            this._bag[1] = TetrominoShape.O;
            this._bag[2] = TetrominoShape.T;
            this._bag[3] = TetrominoShape.J;
            this._bag[4] = TetrominoShape.L;
            this._bag[5] = TetrominoShape.S;
            this._bag[6] = TetrominoShape.Z;
        }
        _pick() {
            return this.nextInt() % this._bag.length;
        }
        pick() {
            let pick = this._pick();
            if (pick == this._lastPick) {
                pick = this._pick();
            }
            this._lastPick = pick;
            return this._bag[pick];
        }
    }
    Tetris.BagRandomizer = BagRandomizer;
})(Tetris || (Tetris = {}));
//# sourceMappingURL=random.js.map