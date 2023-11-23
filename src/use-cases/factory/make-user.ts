import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateUser } from "../create-user";
import {SearchUsers} from '../search-users';
export function makeCreateUserUseCase() {
  const prismaUsersRepository = new PrismaUserRepository();
  const createUseCase = new CreateUser(prismaUsersRepository); // Camada Escondida prismaUsersRepository - CreateUSER UTILIZA prismaUsersRepository

  return createUseCase;
}

export function makeSearchUserUseCase() {
  const prismaUsersRepository = new PrismaUserRepository();
  const createUseCase = new SearchUsers(prismaUsersRepository); // Camada Escondida prismaUsersRepository - CreateUSER UTILIZA prismaUsersRepository

  return createUseCase;
}