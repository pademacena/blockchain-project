import { Request, Response } from "express";
import { AddNewBlockService } from "../services/addNewBlock";

class AddNewBlockController {
  async handle(req: Request, res: Response) {
    const { sender, received, amount } = req.body;

    const addNewBlock = new AddNewBlockService();
    const block = await addNewBlock.execute({sender, received, amount});

    return res.json(block);
  }
}

export default new AddNewBlockController;