import { Prisma, tb_transactions } from "@prisma/client";
import { prisma } from "../../lib/prima";
import { TransactionRepository } from "../TransactionRepository";

export class PrismaTransactionRepository implements TransactionRepository{
  
  async create({fromId, toId, value}: Prisma.tb_transactionsCreateInput ): Promise<tb_transactions>{
    
      const createTransaction = await prisma.tb_transactions.create({
      data:{
        fromId,
        toId,
        value
      }
    })
    return createTransaction
    
  }
 
  async findTransactionById(id: string){
      const findById = await prisma.tb_transactions.findUnique({
        where: {
          id
        }
      })

      if(!findById) throw new Error('Transaction not found')
        
      return findById
    
  }

  async findAll() {
    const allTransactions = await prisma.tb_transactions.findMany();
    
    if(!allTransactions) null;

    return allTransactions;
   
  }
  
}