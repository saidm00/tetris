class Dice {
    constructor(seed, faces) {
        this.seed = seed;
        this.faces = faces;
    }
    roll() {
        let x = hash_fnv_1a(this.seed.bytes) % this.faces.value;
        ++this.seed.value;
        return new uint32(x);
    }
}
var Shape;
(function (Shape) {
    Shape[Shape["I"] = 0] = "I";
    Shape[Shape["O"] = 1] = "O";
    Shape[Shape["T"] = 2] = "T";
    Shape[Shape["J"] = 3] = "J";
    Shape[Shape["L"] = 4] = "L";
    Shape[Shape["S"] = 5] = "S";
    Shape[Shape["Z"] = 6] = "Z";
})(Shape || (Shape = {}));
// Randomizer is an interface that defines a means to get sudo-random selection of tetromino shapes.
class Randomizer {
}
class RandomizerBag extends Randomizer {
    constructor(seed) {
        super();
        this.dice = new Dice(seed, new uint32(7));
        this.bag = new Array(7);
        this.bag[0] = Shape.I;
        this.bag[1] = Shape.O;
        this.bag[2] = Shape.T;
        this.bag[3] = Shape.J;
        this.bag[4] = Shape.L;
        this.bag[5] = Shape.S;
        this.bag[6] = Shape.Z;
    }
    next() {
        let index = this.dice.roll();
        if (index == this.lastIndex) {
            index = this.dice.roll();
        }
        this.lastIndex = index;
        return this.bag[index.value];
    }
    get last() {
        return this.bag[this.lastIndex.value];
    }
}
/*
class RandomizerTGM3 extends Randomizer
{
}

class RandomizerTGM extends Randomizer
{
}*/
//# sourceMappingURL=random.js.map