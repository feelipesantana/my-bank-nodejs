import {Transaction} from '../entities/Transaction'

export interface TransactionRepository{
  create(transaction: Transaction ): Promise<void>;
  findTransactionById(id: string):Promise<Transaction>;
  findTransactions():Promise<Transaction[]>;
}