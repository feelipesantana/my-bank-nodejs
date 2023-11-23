import { User } from "../../entities/User";
import { prisma } from "../../lib/prima";
import { UserRepository } from "../UserRepository";

export class PrismaUserRepository implements UserRepository{
  async create(user: User): Promise<User> {
      const createdUser = await prisma.user.create({
        data: {
          name: user.props.name,
          cpf: user.props.cpf
        }
      })

      return User.create(createdUser)
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

      return User.create(findCPF)
  }

  async findAll(): Promise<User[]> {
      const allUsers = await prisma.user.findMany()
      
      return allUsers.map(user => User.create(user))
  }
}