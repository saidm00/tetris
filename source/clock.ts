class Clock
{
	private startTime: number;
	private time: number;
	private lastTime: number;
	
	constructor (time: number)
	{
		this.startTime = time;
		this.time = time;
		this.lastTime = 0;
	}
	
	public update (time: number): void
	{
		this.lastTime = this.time;
		this.time = time;
	}
	
	public get deltaTime (): number
	{
		return this.time - this.lastTime;
	}

	public get elapsedTime (): number
	{
		return this.time - this.startTime;
	}
}

class TickCounter
{
	private _tickCount: number;

	constructor ()
	{
		this._tickCount = 0;
	}

	public update (tickCount: number): void
	{
		this._tickCount += tickCount;
	}

	public needsReset (limit: number): boolean
	{
		return this.tickCount >= limit;
	}

	public reset (limit: number): void
	{
		this._tickCount = this.tickCount - limit;
	}

	get tickCount (): number
	{
		return this._tickCount;
	};
}