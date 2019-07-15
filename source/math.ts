abstract class int_base extends Object
{
    protected data: ArrayBuffer;

    public get data_view (): DataView
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
}

const int8 = (val: number): int_base =>
{
    this = int_base(true, 1);
}

class int8 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setInt8(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getInt8(0);
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
}

class int16 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setInt16(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getInt16(0);
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
}

class int32 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setInt32(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getInt32(0);
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
}

class uint8 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setUint8(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getUint8(0);
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
}

class uint16 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setUint16(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getUint16(0);
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
}

class uint32 extends int_base
{
    public set value (rhs: number)
    {
        super.data_view.setUint32(0, rhs);
    }

    public get value (): number
    {
        return super.data_view.getUint32(0);
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
}
/*
class int extends int32 {};
class uint extends uint32 {};
*/
class Vector
{
    public x: number;
    public y: number;

    constructor (x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    static add (a: Vector, b: Vector): Vector
    {
        return new Vector(a.x + b.x, a.y + b.y);
    }
    static sub (a: Vector, b: Vector): Vector
    {
        return new Vector(a.x - b.x, a.y - b.y);
    }
    static mul (a: Vector, b: Vector): Vector
    {
        return new Vector(a.x * b.x, a.y * b.y);
    }
    static div (a: Vector, b: Vector): Vector
    {
        return new Vector(a.x / b.x, a.y / b.y);
    }
    static adds (a: Vector, b: number): Vector
    {
        return new Vector(a.x + b, a.y + b);
    }
    static subs (a: Vector, b: number): Vector
    {
        return new Vector(a.x - b, a.y - b);
    }
    static muls (a: Vector, b: number): Vector
    {
        return new Vector(a.x * b, a.y * b);
    }
    static divs (a: Vector, b: number): Vector
    {
        return new Vector(a.x / b, a.y / b);
    }

}

function clamp(x: number, a: number, b: number)
{
    return Math.max(Math.min(x, b), a);
}