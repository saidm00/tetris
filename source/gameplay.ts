class GameplayEvent
{
	public time: number;
	public duration: number;

	constructor (time: number, duration: number)
	{
		this.time = time;
		this.time = duration;
	}
	
	public isActive (time: number)
	{
		return time >= this.time && time <= (this.time + this.duration);
	}
}

class Gameplay
{
	seed: uint32;
	events: Array<GameplayEvent>;

	constructor (seed: uint32)
	{
		this.seed = seed;
		this.events = new Array<GameplayEvent>();
	}
	
	pushEvent (e: GameplayEvent)
	{
		this.events.push(e);
	}
	
	get objJsonB64 ()
	{
		let obj = this;
		let objJsonStr = JSON.stringify(obj);
		let objJsonB64 = btoa(objJsonStr);//Buffer.from(objJsonStr).toString("base64");
		return objJsonB64;
	}
}