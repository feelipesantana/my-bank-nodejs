import { tb_transactions } from "@prisma/client";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { UserRepository } from "../repositories/UserRepository";
import { BankAccountRepository } from "../repositories/BankAccountRepository";

interface CreateTransactionUseCaseRequest{
  fromId: string;
  toId: string;
  value: number;
}

type CreateTransactionUseCaseResponse = tb_transactions
export class CreateTransactionUseCase{
  constructor(private transactionRepository: TransactionRepository, private usersRepository: UserRepository, private bankAccountRepository: BankAccountRepository){}


  async execute({ fromId, toId, value }: CreateTransactionUseCaseRequest): Promise<CreateTransactionUseCaseResponse> {
    const findByCPFSender = await this.usersRepository.findByCPF(fromId);
    const findByCPFReceiver = await this.usersRepository.findByCPF(toId);

   
    if (!findByCPFSender || !findByCPFReceiver) {
      throw new Error("Usuario Inexistente");
    }

    const findAccountSenderUser = await this.bankAccountRepository.findByUserId(findByCPFSender.id);
    const findAccountReceiverUser = await this.bankAccountRepository.findByUserId(findByCPFReceiver.id);
    
    if(!findAccountSenderUser || !findAccountReceiverUser ){
      throw new Error("Conta inexistente");
    }
    if(findAccountSenderUser.value < value){
      throw new Error("Você não possui saldo para efetuar essa transação");
    }

    
    const newValueUserSender = findAccountSenderUser.value - value
    const newValueUserReceiver = findAccountReceiverUser.value + value


    const updateUserSender = await this.bankAccountRepository.update(findAccountSenderUser.userId, newValueUserSender);
    const updateUserReceiver = await this.bankAccountRepository.update(findAccountReceiverUser.userId, newValueUserReceiver);

    console.log("VALORES ATUALIZADOS", updateUserSender, updateUserReceiver)


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