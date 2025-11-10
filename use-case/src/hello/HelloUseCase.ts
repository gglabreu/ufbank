import { IHelloRepository } from "./IHelloRepository";

export class HelloUseCase {
  constructor(private repository: IHelloRepository) {}

  execute(): string {
    const hello = this.repository.getMessage();
    return hello.message;
  }
}