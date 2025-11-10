import { Request, Response } from "express";
import { Logger } from "@libs/logger/src/Logger";
export class HealthController {
  static async handle(req: Request, res: Response) {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      Logger.log("Health check falhou: 'data' não é um array.");
      return res.status(400).send({ message: "'data' deve ser um array." });
    }

    if (data.length <= 5) {
      Logger.log("Health check falhou: array não tem mais que 4 índices.");
      return res.status(400).send({
        message: "Array deve ter mais que 4 índices (pelo menos 6 itens).",
      });
    }

    Logger.log("Iniciando health check... percorrendo array.");
    for (const item of data) {
      Logger.log(`Iterando sobre item: ${item}`);
    }
    Logger.log("Array percorrido com sucesso.");

    return res
      .status(200)
      .send({ message: "API saudável!", itemsProcessed: data.length });
  }
}