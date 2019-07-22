abstract class int_base extends Object
{
    protected data: ArrayBuffer;

    public get dataView (): DataView
    {
        return new DataView(this.data, 0, this.data.byteLength);
    }

    constructor (signed: boolean = true, byte_length: number = 4)
    {
        super();
        byte_length = Math.floor(Math.max(byte_length, 0));
        this.data = new ArrayBuffer(byte_length);
    }

    public abstract set value (rhs: number);
    public abstract get value (): number;

    abstract get bytes (): Array<uint8>;
}

abstract class float_base extends Object
{
    protected data: ArrayBuffer;

    constructor ()
    {
        super();
        this.data = new ArrayBuffer(4);
    }
    
    public get dataView (): DataView
    {
        return new DataView(this.data, 0, this.data.byteLength);
    }

    public abstract set value (rhs: number);
    public abstract get value (): number;

    abstract get bytes (): Array<uint8>;
}

class int8 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setInt8(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getInt8(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super(true, 1);
        this.value = val;
    }

    public get bytes(): Array<uint8> {
        let bytes_of_data = new Array<uint8>(1);

        bytes_of_data[0] = new uint8(this.value);

        return bytes_of_data;
    }
}

class int16 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setInt16(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getInt16(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super(true, 2);
        this.value = val;
    }

    public get bytes(): Array<uint8>
    {
        let bytes_of_data = new Array<uint8>(2);

        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);

        return bytes_of_data;
    }
}

class int32 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setInt32(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getInt32(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super(true, 4);
        this.value = val;
    }

    public get bytes(): Array<uint8>
    {
        let bytes_of_data = new Array<uint8>(4);

        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);

        return bytes_of_data;
    }
}

class uint8 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setUint8(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getUint8(0);
    }
    
    public valueOf (): number
    {
        return this.value;
    }

    constructor (val: number)
    {
        super(false, 1);
        this.value = val;
    }
    public get bytes(): Array<uint8> {
        let bytes_of_data = new Array<uint8>(1);

        bytes_of_data[0] = new uint8(this.value);

        return bytes_of_data;
    }
}

class uint16 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setUint16(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getUint16(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super(false, 2);
        this.value = val;
    }

    public get bytes(): Array<uint8>
    {
        let bytes_of_data = new Array<uint8>(2);

        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);

        return bytes_of_data;
    }
}

class uint32 extends int_base
{
    public set value (rhs: number)
    {
        super.dataView.setUint32(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getUint32(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super(false, 4);
        this.value = val;
    }
    
    public get bytes(): Array<uint8>
    {
        let bytes_of_data = new Array<uint8>(4);

        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);

        return bytes_of_data;
    }
}

class float32 extends float_base
{
    public set value (rhs: number)
    {
        super.dataView.setFloat32(0, rhs);
    }

    public get value (): number
    {
        return super.dataView.getFloat32(0);
    }
    
    public valueOf (): number
    {
        return this.value
    }

    constructor (val: number)
    {
        super();
        this.value = val;
    }
    
    public get bytes(): Array<uint8>
    {
        let bytes_of_data = new Array<uint8>(4);

        bytes_of_data[0] = new uint8(this.value & 0xFF);
        bytes_of_data[1] = new uint8((this.value >> 8) & 0xFF);
        bytes_of_data[2] = new uint8((this.value >> 16) & 0xFF);
        bytes_of_data[3] = new uint8((this.value >> 24) & 0xFF);

        return bytes_of_data;
    }
}

class float extends float32 {};
class int extends int32 {};
class uint extends uint32 {};

function string_to_bytes (s: string): Array<uint8>
{
    let bytes_of_data: Array<uint8> = new Array<uint8>(s.length);

    for (let i: number = 0; i < s.length; ++i)
    {
        bytes_of_data[i] = new uint8(s.charCodeAt(i));
    }

    return bytes_of_data;
}

function clamp(x: number, a: number, b: number)
{
    return Math.max(Math.min(x, b), a);
}

//export { uint, uint8, uint16, uint32, int, int8, int16, int32 };