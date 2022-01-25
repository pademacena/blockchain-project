import { Request, Response } from "express";
import { FilterUserServices } from "../services/filterUser";

class FilterUserController {
  async handle(req: Request, res: Response) {
    const { user } = req.body;
    const received = user;
    const sender = user;

    console.log(user);

    const filterUser = new FilterUserServices();
    const block = await filterUser.execute({sender, received});

    return res.json(block);
  }
}

export default new FilterUserController;