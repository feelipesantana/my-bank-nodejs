import { tb_users } from "@prisma/client";

export interface BankAccountRepository{
  create({id}: tb_users, value: number): Promise<void>;
}