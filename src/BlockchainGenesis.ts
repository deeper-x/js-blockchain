import * as sha256 from "sha256";

export class BlockchainGenesis {
    private _index: number;
    private _timestamp: number;
    private _data: string;
    private _prevHash: string;
    private _thisHash: string;

    constructor(index: number, timestamp: number, data: string, prevHash: string) {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._prevHash = prevHash;
        this._thisHash = sha256.default(
            this._index + this._timestamp + this._data + this._prevHash
        )
    }

    get index(): number {
        return this._index;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    get data(): string {
        return this._data;
    }

    get prevHash(): string {
        return this._prevHash;
    }

    get thisHash(): string {
        return this._thisHash;
    }

}
