import { tb_transactions } from "@prisma/client";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { UserRepository } from "../repositories/UserRepository";

interface CreateTransactionUseCaseRequest{
  fromId: string;
  toId: string;
  value: number;
}

type CreateTransactionUseCaseResponse = tb_transactions
export class CreateTransactionUseCase{
  constructor(private transactionRepository: TransactionRepository, private usersRepository: UserRepository){}


  async execute({ fromId, toId, value }: CreateTransactionUseCaseRequest): Promise<CreateTransactionUseCaseResponse> {
    const findByCPFSender = await this.usersRepository.findByCPF(fromId);
    const findByCPFReceiver = await this.usersRepository.findByCPF(toId);
  
    if (!findByCPFSender || !findByCPFReceiver) {
      throw new Error("Usuario Inexistente");
    }
  
    try {
      const createTransaction = await this.transactionRepository.create({
        from: { connect: { id: fromId }},
        to: {connect: { id: toId }},
        fromId,
        toId,
        value // Valor da transação
        // Adicione timestamp ou bank se necessário
      });
      return createTransaction;
    } catch (error) {
      console.error("Erro ao criar transação:", error);
      throw new Error("Erro ao criar transação");
    }
  }
} 