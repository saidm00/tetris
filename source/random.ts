namespace Tetris
{
    /*
        Based on: https://gist.github.com/blixt/f17b47c62508be59987b
    */
    class Randomizer
    {
        private _seed: number;

        constructor (seed: number)
        {
            this._seed = seed % 2147483647;
            if (this._seed <= 0) this._seed += 2147483646;
        }

        // Returns a pseudo-random value between 1 and 2^32 - 2.
        public nextInt (): number
        {
            return this._seed = this._seed * 16807 % 2147483647;
        }

        // Returns a pseudo-random floating point number in range [0, 1).        
        public nextFloat (): number
        {
            // We know that result of next() will be 1 to 2147483646 (inclusive).
            return (this.nextInt() - 1) / 2147483646;
        }
    }
    
	export enum TetrominoShape { I, O, T, J, L, S, Z }
	
	export class BagRandomizer extends Randomizer
	{
		private _bag: Array<TetrominoShape>;
		private _lastPick: number;

        private _intializeBag (): void
        {
            this._bag = new Array<TetrominoShape>(7);
            this._bag[0] = TetrominoShape.I;
            this._bag[1] = TetrominoShape.O;
            this._bag[2] = TetrominoShape.T;
            this._bag[3] = TetrominoShape.J;
            this._bag[4] = TetrominoShape.L;
            this._bag[5] = TetrominoShape.S;
            this._bag[6] = TetrominoShape.Z;
        }

		constructor (seed: number)
		{
			super(seed);
            this._intializeBag();
		}

		private _pick (): number
		{
			return this.nextInt() % this._bag.length;
		}

		public pick (): TetrominoShape
		{
			let pick: number = this._pick();
			if (pick == this._lastPick)
			{
				pick = this._pick();
			}
			this._lastPick = pick;
			return this._bag[pick];
		}
	}
	
}