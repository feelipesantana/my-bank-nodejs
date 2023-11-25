/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `tb_account_bank` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tb_account_bank_userId_key" ON "tb_account_bank"("userId");
