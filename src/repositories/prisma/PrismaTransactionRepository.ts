import { Transaction } from "@prisma/client";
import { prisma } from "../../lib/prima";
import { TransactionRepository } from "../TransactionRepository";

export class PrismaTransactionRepository implements TransactionRepository{
  
  async create(transaction:Transaction): Promise<Transaction>{
      const createTransaction = await prisma.transaction.create({
        data: {
          from: transaction.from,
          to: transaction.to,
          value: transaction.value
        }
      })

      return createTransaction
  }
 
  async findTransactionById(id: string){
      const findById = await prisma.transaction.findUnique({
        where: {
          id
        }
      })

      if(!findById) throw new Error('Transaction not found')
        
      return findById
    
  }

  async findAll() {
    const allTransactions = await prisma.transaction.findMany();
    
    if(!allTransactions) null;

    return allTransactions;
   
  }
  
}