class GameplayEvent {
    constructor(time, duration) {
        this.time = time;
        this.time = duration;
    }
    isActive(time) {
        return time >= this.time && time <= (this.time + this.duration);
    }
}
class Gameplay {
    constructor(seed) {
        this.seed = seed;
        this.events = new Array();
    }
    pushEvent(e) {
        this.events.push(e);
    }
    get objJsonB64() {
        let obj = this;
        let objJsonStr = JSON.stringify(obj);
        let objJsonB64 = btoa(objJsonStr); //Buffer.from(objJsonStr).toString("base64");
        return objJsonB64;
    }
}
//# sourceMappingURL=gameplay.js.map