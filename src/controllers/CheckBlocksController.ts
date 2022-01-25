import { Request, Response } from "express";
import { CheckBlocksService } from "../services/checkBlocks";

class CheckBlocksController {
  async handle(req: Request, res: Response) {

    const checkblocks = new CheckBlocksService();
    const check = await checkblocks.execute();

    return res.json(check);
  }
}

export default new CheckBlocksController;