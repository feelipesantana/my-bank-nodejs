import { User } from "@prisma/client";
import { prisma } from "../../lib/prima";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository{
  async create(user: User): Promise<User> {
      const createdUser = await prisma.user.create({
        data: {
          name: user.name,
          cpf: user.cpf
        }
      })

      return createdUser
  }
 
  async findByCPF(cpf: string): Promise<User | null> {
      const findCPF = await prisma.user.findFirst({
        where: {
          cpf: cpf
        }
      })

      if(!findCPF){
        return null
      }

      return findCPF
  }

  async findAll(): Promise<User[]> {
      const allUsers = await prisma.user.findMany()
      
      return allUsers
  }
}