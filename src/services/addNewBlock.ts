import Blockchain from './blockchain';

interface IAddNewBlock {
  sender: any;
  received: any;
  amount: any;
}

class AddNewBlockService {
  async execute({ sender, received, amount }: IAddNewBlock ) {

    
    await Blockchain.addBlock({sender, received, amount});
    const newblock = Blockchain.blocks[Blockchain.blocks.length -1];
    // console.log(Blockchain.blocks.filter(blockchain => blockchain.data.recived == received));
    return newblock;
  } 
}

export { AddNewBlockService }