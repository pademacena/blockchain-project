import { Blockchain } from './blockchain';

interface IAddNewBlock {
  sender: any;
  received: any;
  amount: any;
}

class AddNewBlockService {
  async execute({ sender, received, amount }: IAddNewBlock ) {
    const blockchain = new Blockchain();

    const insertBlock = blockchain.addBlock({sender, received, amount});
    console.log(blockchain);
    console.log(blockchain.blocks[1]);

    return insertBlock;
  } 
}

export { AddNewBlockService }