class Clock {
    constructor(time) {
        this.startTime = time;
        this.time = time;
        this.lastTime = 0;
    }
    update(time) {
        this.lastTime = this.time;
        this.time = time;
    }
    get deltaTime() {
        return this.time - this.lastTime;
    }
    get elapsedTime() {
        return this.time - this.startTime;
    }
}
class TickCounter {
    constructor() {
        this._tickCount = 0;
    }
    update(tickCount) {
        this._tickCount += tickCount;
    }
    needsReset(limit) {
        return this.tickCount >= limit;
    }
    reset(limit) {
        this._tickCount = this.tickCount - limit;
    }
    get tickCount() {
        return this._tickCount;
    }
    ;
}
//# sourceMappingURL=timer.js.map