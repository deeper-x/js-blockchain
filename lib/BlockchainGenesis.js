"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha256 = __importStar(require("sha256"));
class BlockchainGenesis {
    constructor(index, timestamp, data, prevHash) {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._prevHash = prevHash;
        this._thisHash = sha256.default(this._index + this._timestamp + this._data + this._prevHash);
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
exports.BlockchainGenesis = BlockchainGenesis;
