import { prisma } from "../../lib/prima";
import { BankAccountRepository } from "../BankAccountRepository";


export class PrismaBankAccountRepository implements BankAccountRepository {
  
  async findByUserId(userId: string) {
    const findeUSer = await prisma.tb_account_bank.findFirst({
      where:{
        userId
      }
    })

    if(findeUSer){
      return findeUSer
    }

    return null
    
    
  }

  async update(userId:string,value:number){
    
    const updateUser = await prisma.tb_account_bank.update({
      where:{
        userId
      },
      data:{
        value
      }
    })

    return updateUser
  }
}