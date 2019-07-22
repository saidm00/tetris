const FNV_offset_basis = new uint32(0x811c9dc5);
const FNV_prime = new uint32(0x1000193);
function hash_fnv_0(bytes_of_data) {
    let hash = new uint32(0);
    let byte_of_data;
    for (let i = 0; i < bytes_of_data.length; ++i) {
        byte_of_data = bytes_of_data[i];
        hash *= FNV_prime;
        hash ^= byte_of_data;
    }
    return hash;
}
function hash_fnv_1(bytes_of_data) {
    let hash = FNV_offset_basis;
    let byte_of_data;
    for (let i = 0; i < bytes_of_data.length; ++i) {
        byte_of_data = bytes_of_data[i];
        hash *= FNV_prime;
        hash ^= byte_of_data;
    }
    return hash;
}
function hash_fnv_1a(bytes_of_data) {
    let hash = FNV_offset_basis;
    let byte_of_data;
    for (let i = 0; i < bytes_of_data.length; ++i) {
        byte_of_data = bytes_of_data[i];
        hash ^= byte_of_data;
        hash *= FNV_prime;
    }
    return hash;
}
class Hashtable {
    constructor(size) {
        this.data = new Array(size);
    }
    setValue(key, value) {
        const key_bytes = string_to_bytes(key);
        const index = hash_fnv_1a(key_bytes) % this.data.length;
        this.data[index] = value;
        return index;
    }
}
//# sourceMappingURL=hash.js.map