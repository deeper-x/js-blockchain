import { Block } from "./Block";
import { BlockchainGenesis } from "./BlockchainGenesis";

const createGenesisBlock = () => new Block(0, Date.now(), "Genesis block", "0");

const genbBlock = (lastBlock: Block|BlockchainGenesis, data: string) => new Block(lastBlock.index + 1,
                                                                Date.now(),
                                                                data,
                                                                lastBlock.thisHash,
                                                                );

const createBlockChain = (num: number) => {
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
