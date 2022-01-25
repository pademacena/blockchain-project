import Blockchain from './blockchain';

class CheckBlocksService {
  async execute() {
    
    const valid = Blockchain.isValid();

    return valid;
  } 
}

export { CheckBlocksService }