var Hashing;
(function (Hashing) {
    const FNV_offset_basis = new uint32(0x811c9dc5);
    const FNV_prime = new uint32(0x1000193);
    Hashing.hash_fnv_0 = (bytes_of_data) => {
        let hash = new uint32(0);
        let byte_of_data;
        for (let i = 0; i < bytes_of_data.length; ++i) {
            byte_of_data = bytes_of_data[i];
            hash *= FNV_prime;
            hash ^= byte_of_data;
        }
        return hash;
    };
    Hashing.hash_fnv_1 = (bytes_of_data) => {
        let hash = FNV_offset_basis;
        let byte_of_data;
        for (let i = 0; i < bytes_of_data.length; ++i) {
            byte_of_data = bytes_of_data[i];
            hash *= FNV_prime;
            hash ^= byte_of_data;
        }
        return hash;
    };
    Hashing.hash_fnv_1a = (bytes_of_data) => {
        let hash = FNV_offset_basis;
        let byte_of_data;
        for (let i = 0; i < bytes_of_data.length; ++i) {
            byte_of_data = bytes_of_data[i];
            hash ^= byte_of_data;
            hash *= FNV_prime;
        }
        return hash;
    };
    Hashing.string_to_bytes = (str) => {
        let bytes_of_data = new Array(str.length);
        for (let i = 0; i < str.length; ++i) {
            bytes_of_data[i] = new uint8(str.charCodeAt(i));
        }
        return bytes_of_data;
    };
})(Hashing || (Hashing = {}));
class Hashtable {
    constructor(size) {
        this.data = new Array(size);
    }
    getValueByIndex(index) {
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
    setValueByKey(key, value) {
        let key_bytes = Hashing.string_to_bytes(key);
        let index = Hashing.hash_fnv_1a(key_bytes) % this.data.length;
        this.data[index] = value;
        return index;
    }
}
//# sourceMappingURL=hash.js.map