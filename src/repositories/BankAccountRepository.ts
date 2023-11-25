import { tb_account_bank } from "@prisma/client";

export interface BankAccountRepository{
  findByUserId(userId: string): Promise<tb_account_bank | null>;
  update(userId:string, value:number):  Promise<tb_account_bank>;
}