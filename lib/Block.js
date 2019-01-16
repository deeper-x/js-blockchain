"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, timestamp, data, prevHash) {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._prevHash = prevHash;
        this._thisHash = this._timestamp + this._data + this._prevHash;
    }
    get index() {
        return this._index;
    }
    get timestamp() {
        return this._timestamp;
    }
    get data() {
        return this._data;
    }
    get prevHash() {
        return this._prevHash;
    }
    get thisHash() {
        return this._thisHash;
    }
}
exports.Block = Block;
