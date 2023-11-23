import { Prisma, Transaction } from "@prisma/client";

export interface TransactionRepository{
  create(transaction: Prisma.TransactionCreateInput ): Promise<Transaction>;
  findTransactionById(id: string):Promise<Transaction | null>;
  findAll():Promise<Transaction[] | null>;
}