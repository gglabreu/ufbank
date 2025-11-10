import { Hello } from "@domain/entities/Hello";
import { IHelloRepository } from "@use-case/hello/IHelloRepository";

export class HelloRepository implements IHelloRepository {
  getMessage(): Hello {
    return new Hello("Hello, World!");
  }
}

