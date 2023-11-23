import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateUser } from "../create-user";

export function makeCreateUseCase() {
  const prismaUsersRepository = new PrismaUserRepository();
  const createUseCase = new CreateUser(prismaUsersRepository);

  return createUseCase;
}