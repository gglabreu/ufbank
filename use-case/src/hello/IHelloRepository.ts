import { Hello } from "@domain/entities/Hello";

export interface IHelloRepository {
  getMessage(): Hello;
}