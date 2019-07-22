class Dice
{
    private seed: uint32;
    private faces: uint32;

    constructor (seed: uint32, faces: uint32)
    {
        this.seed = seed;
        this.faces = faces;
    }

    public roll (): uint32
    {
        let x = hash_fnv_1a(this.seed.bytes) % this.faces.value;
        ++ this.seed.value;
        return new uint32(x);
    }
}


enum Shape { I, O, T, J, L, S, Z }

// Randomizer is an interface that defines a means to get sudo-random selection of tetromino shapes.
abstract class Randomizer
{
    public abstract get last (): Shape;
    public abstract next (): Shape;
}

class RandomizerBag extends Randomizer
{
    private bag: Array<Shape>;
    private dice: Dice;
    private lastIndex: uint32;
    
    constructor (seed: uint32)
    {
        super();
        this.dice = new Dice(seed, new uint32(7));
        
        this.bag = new Array<Shape>(7);
        this.bag[0] = Shape.I;
        this.bag[1] = Shape.O;
        this.bag[2] = Shape.T;
        this.bag[3] = Shape.J;
        this.bag[4] = Shape.L;
        this.bag[5] = Shape.S;
        this.bag[6] = Shape.Z;
    }

    public next (): Shape
    {
        let index: uint32 = this.dice.roll();
        if (index == this.lastIndex)
        {
            index = this.dice.roll();
        }
        this.lastIndex = index;
        return this.bag[index.value];
    }
    
    public get last (): Shape
    {
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
