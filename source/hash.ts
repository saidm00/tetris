namespace Hashing
{
    const FNV_offset_basis: uint32 = new uint32(0x811c9dc5);
    const FNV_prime: uint32 = new uint32(0x1000193);

    export const hash_fnv_0 = (bytes_of_data: Array<uint8>): uint32 =>
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

    export const hash_fnv_1 = (bytes_of_data: Array<uint8>): uint32 =>
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

    export const hash_fnv_1a = (bytes_of_data: Array<uint8>): uint32 =>
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

    export const string_to_bytes = (str: string): Array<uint8> =>
    {
        let bytes_of_data: Array<uint8> = new Array<uint8>(str.length);

        for (let i: number = 0; i < str.length; ++i)
        {
            bytes_of_data[i] = new uint8(str.charCodeAt(i));
        }

        return bytes_of_data;
    }
}

class Hashtable <T>
{
    public readonly data: Array<T>;

    constructor (size: number)
    {
        this.data = new Array<T>(size);
    }

    public getValueByIndex (index: number): T
    {
        return this.data[index];
    }
    /*
    public getValueByKey (key: string): T
    {
        let key_bytes: Array<uint8> = Hashing.string_to_bytes(key);
        let index: number = Hashing.hash_fnv_1a(key_bytes).getValue() % this.data.length;
    }

    public setValueByIndex (index: number, value: T): void
    {
        this.data[index] = key;
    }
    */
    public setValueByKey (key: string, value: T): number
    {
        let key_bytes: Array<uint8> = Hashing.string_to_bytes(key);
        let index: number = Hashing.hash_fnv_1a(key_bytes) % this.data.length;

        this.data[index] = value;

        return index;
    }
}