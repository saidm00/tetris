var Tetris;
(function (Tetris) {
    class Event {
        constructor(time, duration) {
            this.time = time;
            this.time = duration;
        }
        isActive(time) {
            return time >= this.time && time <= (this.time + this.duration);
        }
    }
    Tetris.Event = Event;
    class KeyEvent extends Event {
        constructor(time, duration, key) {
            super(time, duration);
            this.key = key;
        }
    }
    Tetris.KeyEvent = KeyEvent;
    class Record {
        constructor(seed) {
            this.seed = seed;
            this.events = [];
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
    Tetris.Record = Record;
})(Tetris || (Tetris = {}));
//# sourceMappingURL=record.js.map