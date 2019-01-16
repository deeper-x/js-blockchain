"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = require("./Block");
const createGenesisBlock = () => new Block_1.Block(0, Date.now(), "Genesis block", "0");
const genbBlock = (lastBlock, data) => new Block_1.Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash);
const createBlockChain = (num) => {
    const blockchain = [createGenesisBlock()];
    let previousBlock = blockchain[0];
    for (let i = 0; i < num; i++) {
        const newBlock = genbBlock(previousBlock, `block num ${num}`);
        blockchain.push(newBlock);
        previousBlock = newBlock;
    }
    console.log(blockchain);
};
createBlockChain(10);
