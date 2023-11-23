import { PrismaTransactionRepository } from "../../repositories/prisma/PrismaTransactionRepository";
import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateTransactionUseCase } from "../create-transaction";

export function makeCreateTransactionUseCase() {
  const prismTransactionRepository = new PrismaTransactionRepository();
  const prismaUsersRepository = new PrismaUserRepository();
  const createTransaction = new CreateTransactionUseCase(prismTransactionRepository, prismaUsersRepository); // Camada Escondida prismaUsersRepository - CreateUSER UTILIZA prismaUsersRepository

  return createTransaction;
}