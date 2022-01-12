import Blockchain from './blockchain';

interface IAddNewBlock {
  sender: any;
  received: any;
  amount: any;
}

class AddNewBlockService {
  async execute({ sender, received, amount }: IAddNewBlock ) {
    
    const insertBlock = Blockchain.addBlock({sender, received, amount});
    console.log(Blockchain);

    return insertBlock;
  } 
}

export { AddNewBlockService }