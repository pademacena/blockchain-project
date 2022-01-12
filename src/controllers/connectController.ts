import { Request, Response } from "express";

class ConnectController {
  async handle(req: Request, res: Response) {
    return res.json({message: "Connected"});
  }
}

export default new ConnectController;