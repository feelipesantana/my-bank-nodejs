import { Transaction } from "../entities/Transaction";
import { TransactionRepository } from "../repositories/TransactionRepository";



interface SearchTransactionResponse{
  transactions: Transaction[] 
}

export class SearchTransactions{
  
  constructor(private transactionRepository: TransactionRepository) {}


  async execute():Promise<SearchTransactionResponse>{

    const transactions = await this.transactionRepository.findTransactions();

    return {transactions};
  }
 
}