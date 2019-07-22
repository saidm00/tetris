const FNV_offset_basis: uint32 = new uint32(0x811c9dc5);
const FNV_prime: uint32 = new uint32(0x1000193);

function hash_fnv_0 (bytes_of_data: Array<uint8>): uint32
{
    let hash: uint32 = new uint32(0);
    let byte_of_data: uint8;

    for (let i: number = 0; i < bytes_of_data.length; ++i)
    {
        byte_of_data = bytes_of_data[i];

        hash *= FNV_prime;
        hash ^= byte_of_data;
    }

    return hash;
}

function hash_fnv_1 (bytes_of_data: Array<uint8>): uint32
{
    let hash: uint32 = FNV_offset_basis;
    let byte_of_data: uint8;

    for (let i: number = 0; i < bytes_of_data.length; ++i)
    {
        byte_of_data = bytes_of_data[i];

        hash *= FNV_prime;
        hash ^= byte_of_data;
    }

    return hash;
}

function hash_fnv_1a (bytes_of_data: Array<uint8>): uint32
{
    let hash: uint32 = FNV_offset_basis;
    let byte_of_data: uint8;

    for (let i: number = 0; i < bytes_of_data.length; ++i)
    {
        byte_of_data = bytes_of_data[i];

        hash ^= byte_of_data;
        hash *= FNV_prime;
    }

    return hash;
}

class Hashtable <T>
{
    public readonly data: Array<T>;

    constructor (size: number)
    {
        this.data = new Array<T>(size);
    }

    public setValue (key: string, value: T): number
    {
        const key_bytes: Array<uint8> = string_to_bytes(key);
        const index: number = hash_fnv_1a(key_bytes) % this.data.length;

        this.data[index] = value;

        return index;
    }
}