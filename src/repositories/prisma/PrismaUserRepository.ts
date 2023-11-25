import { Prisma, tb_users } from "@prisma/client";
import { prisma } from "../../lib/prima";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository{
  async create(user: Prisma.tb_usersCreateInput, value:number): Promise<tb_users> {

    
      const createdUser = await prisma.tb_users.create({
        data: {
          name: user.name,
          cpf: user.cpf
        }
      })

      if(createdUser){
        await prisma.tb_account_bank.create({
          data: {
            userId: createdUser.id,
            value
          }
        })
      }

      return createdUser
  }
 
  async findByCPF(cpf: string): Promise<tb_users | null> {
      const findCPF = await prisma.tb_users.findFirst({
        where: {
          cpf: cpf
        }
      })

      if(!findCPF){
        return null
      }

      return findCPF
  }

  async findAll(): Promise<tb_users[]> {
      const allUsers = await prisma.tb_users.findMany()
      
      return allUsers
  }
}