import Blockchain from './blockchain';

interface IAddNewBlock {
  sender: any;
  received: any;
}

class FilterUserServices {
  async execute({ sender, received }: IAddNewBlock ) {

    const infReceived = function(bc) {
      return bc.data.received == received;
    }

    const infSender = function(bc) {
      return bc.data.sender == sender;
    }

    
    const recebido = await Blockchain.blocks.filter(infReceived);
    const envio = await Blockchain.blocks.filter(infSender);
    const filtro = { recebido, envio}

    return filtro;
  } 
}

export { FilterUserServices }