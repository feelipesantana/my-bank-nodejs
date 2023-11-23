import { User } from "../entities/User";

export interface UserRepository{
  create(user: User): Promise<User>;
  findByCPF(cpf: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}