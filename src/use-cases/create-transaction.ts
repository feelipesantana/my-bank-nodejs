import { Transaction } from "@prisma/client";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { UserRepository } from "../repositories/UserRepository";

interface CreateTransactionUseCaseRequest{
  from: string;
  to:string;
  value: number;
}

type CreateTransactionUseCaseResponse = Transaction
export class CreateTransactionUseCase{
  constructor(private transactionRepository: TransactionRepository, private usersRepository: UserRepository){}


  async execute({from,to,value}: CreateTransactionUseCaseRequest): Promise<CreateTransactionUseCaseResponse>{
    
    const findByCPFFrom = await this.usersRepository.findByCPF(from)
    const findByCPFTo = await this.usersRepository.findByCPF(to);
   
    if(!findByCPFFrom || !findByCPFTo){
      throw new Error("Usuario Inexistente")
    }
   
    const createTransaction = this.transactionRepository.create({
      from,
      to,
      value,
    });
    
    return createTransaction;
  }
} 