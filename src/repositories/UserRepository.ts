import { Prisma, User } from "@prisma/client";

export interface UserRepository{
  create(user: Prisma.UserCreateInput): Promise<User>;
  findByCPF(cpf: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}