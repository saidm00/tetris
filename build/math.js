class int_base extends Object {
    get data_view() {
        return new DataView(this.data, 0, this.data.byteLength);
    }
    constructor(signed = true, byte_length = 4) {
        super();
        byte_length = Math.floor(Math.max(byte_length, 0));
        this.data = new ArrayBuffer(byte_length);
    }
}
class int8 extends int_base {
    set value(rhs) {
        super.data_view.setInt8(0, rhs);
    }
    get value() {
        return super.data_view.getInt8(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 1);
        this.value = val;
    }
}
class int16 extends int_base {
    set value(rhs) {
        super.data_view.setInt16(0, rhs);
    }
    get value() {
        return super.data_view.getInt16(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 2);
        this.value = val;
    }
}
class int32 extends int_base {
    set value(rhs) {
        super.data_view.setInt32(0, rhs);
    }
    get value() {
        return super.data_view.getInt32(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 4);
        this.value = val;
    }
}
int32.prototype.valueOf = function () {
    return this.value;
};
class uint8 extends int_base {
    set value(rhs) {
        super.data_view.setUint8(0, rhs);
    }
    get value() {
        return super.data_view.getUint8(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 1);
        this.value = val;
    }
}
class uint16 extends int_base {
    set value(rhs) {
        super.data_view.setUint16(0, rhs);
    }
    get value() {
        return super.data_view.getUint16(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 2);
        this.value = val;
    }
}
class uint32 extends int_base {
    set value(rhs) {
        super.data_view.setUint32(0, rhs);
    }
    get value() {
        return super.data_view.getUint32(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 4);
        this.value = val;
    }
}
/*
class int extends int32 {};
class uint extends uint32 {};
*/
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y);
    }
    static sub(a, b) {
        return new Vector(a.x - b.x, a.y - b.y);
    }
    static mul(a, b) {
        return new Vector(a.x * b.x, a.y * b.y);
    }
    static div(a, b) {
        return new Vector(a.x / b.x, a.y / b.y);
    }
    static adds(a, b) {
        return new Vector(a.x + b, a.y + b);
    }
    static subs(a, b) {
        return new Vector(a.x - b, a.y - b);
    }
    static muls(a, b) {
        return new Vector(a.x * b, a.y * b);
    }
    static divs(a, b) {
        return new Vector(a.x / b, a.y / b);
    }
}
function clamp(x, a, b) {
    return Math.max(Math.min(x, b), a);
}
//# sourceMappingURL=math.js.map