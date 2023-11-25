/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `tb_users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "tb_transactions" DROP CONSTRAINT "tb_transactions_fromId_fkey";

-- DropForeignKey
ALTER TABLE "tb_transactions" DROP CONSTRAINT "tb_transactions_toId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_cpf_key" ON "tb_users"("cpf");

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "tb_users"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_toId_fkey" FOREIGN KEY ("toId") REFERENCES "tb_users"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
