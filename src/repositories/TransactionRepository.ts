import { Prisma, tb_transactions } from "@prisma/client";

export interface TransactionRepository{
  create(transaction: Prisma.tb_transactionsCreateInput): Promise<tb_transactions>;
  findTransactionById(id: string):Promise<tb_transactions | null>;
  findAll():Promise<tb_transactions[] | null>;
}