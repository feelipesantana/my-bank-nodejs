import { Prisma, tb_users } from "@prisma/client";

export interface UserRepository{
  create(user: Prisma.tb_usersCreateInput, value: number): Promise<tb_users>;
  findByCPF(cpf: string): Promise<tb_users | null>;
  findAll(): Promise<tb_users[]>;
}