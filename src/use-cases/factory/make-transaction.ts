import { PrismaBankAccountRepository } from "../../repositories/prisma/PrismaBankAccountRepositoy";
import { PrismaTransactionRepository } from "../../repositories/prisma/PrismaTransactionRepository";
import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateTransactionUseCase } from "../create-transaction";

export function makeCreateTransactionUseCase() {
  const prismTransactionRepository = new PrismaTransactionRepository();
  const prismaUsersRepository = new PrismaUserRepository();
  const prismaBankAccountRepository = new PrismaBankAccountRepository();
  const createTransaction = new CreateTransactionUseCase(prismTransactionRepository, prismaUsersRepository, prismaBankAccountRepository); // Camada Escondida prismaUsersRepository - CreateUSER UTILIZA prismaUsersRepository

  return createTransaction;
}