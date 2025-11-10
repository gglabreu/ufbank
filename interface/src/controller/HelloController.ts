import { Request, Response } from "express";
import { HelloUseCase } from "@use-case/hello/HelloUseCase";
import { HelloRepository } from "@infra/repositories/HelloRepository";

export class HelloController {
  static async handle(req: Request, res: Response) {
    const repo = new HelloRepository();
    const useCase = new HelloUseCase(repo);
    const message = useCase.execute();
    res.send({ message });
  }
}