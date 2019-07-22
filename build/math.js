class int_base extends Object {
    get dataView() {
        return new DataView(this.data, 0, this.data.byteLength);
    }
    constructor(signed = true, byte_length = 4) {
        super();
        byte_length = Math.floor(Math.max(byte_length, 0));
        this.data = new ArrayBuffer(byte_length);
    }
}
class float_base extends Object {
    constructor() {
        super();
        this.data = new ArrayBuffer(4);
    }
    get dataView() {
        return new DataView(this.data, 0, this.data.byteLength);
    }
}
class int8 extends int_base {
    set value(rhs) {
        super.dataView.setInt8(0, rhs);
    }
    get value() {
        return super.dataView.getInt8(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 1);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(1);
        bytes_of_data[0] = new uint8(this.value);
        return bytes_of_data;
    }
}
class int16 extends int_base {
    set value(rhs) {
        super.dataView.setInt16(0, rhs);
    }
    get value() {
        return super.dataView.getInt16(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 2);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(2);
        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        return bytes_of_data;
    }
}
class int32 extends int_base {
    set value(rhs) {
        super.dataView.setInt32(0, rhs);
    }
    get value() {
        return super.dataView.getInt32(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(true, 4);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(4);
        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);
        return bytes_of_data;
    }
}
class uint8 extends int_base {
    set value(rhs) {
        super.dataView.setUint8(0, rhs);
    }
    get value() {
        return super.dataView.getUint8(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 1);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(1);
        bytes_of_data[0] = new uint8(this.value);
        return bytes_of_data;
    }
}
class uint16 extends int_base {
    set value(rhs) {
        super.dataView.setUint16(0, rhs);
    }
    get value() {
        return super.dataView.getUint16(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 2);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(2);
        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        return bytes_of_data;
    }
}
class uint32 extends int_base {
    set value(rhs) {
        super.dataView.setUint32(0, rhs);
    }
    get value() {
        return super.dataView.getUint32(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super(false, 4);
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(4);
        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);
        return bytes_of_data;
    }
}
class float32 extends float_base {
    set value(rhs) {
        super.dataView.setFloat32(0, rhs);
    }
    get value() {
        return super.dataView.getFloat32(0);
    }
    valueOf() {
        return this.value;
    }
    constructor(val) {
        super();
        this.value = val;
    }
    get bytes() {
        let bytes_of_data = new Array(4);
        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);
        return bytes_of_data;
    }
}
class float extends float32 {
}
;
class int extends int32 {
}
;
class uint extends uint32 {
}
;
function string_to_bytes(s) {
    let bytes_of_data = new Array(s.length);
    for (let i = 0; i < s.length; ++i) {
        bytes_of_data[i] = new uint8(s.charCodeAt(i));
    }
    return bytes_of_data;
}
function clamp(x, a, b) {
    return Math.max(Math.min(x, b), a);
}
//export { uint, uint8, uint16, uint32, int, int8, int16, int32 };
//# sourceMappingURL=math.js.map