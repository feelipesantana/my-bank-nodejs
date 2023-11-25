/*
  Warnings:

  - You are about to drop the `Bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_bankId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fromId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_toId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_bankId_fkey";

-- DropTable
DROP TABLE "Bank";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tb_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "bankId" TEXT NOT NULL DEFAULT 'bank-id-fixed',

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_transactions" (
    "id" TEXT NOT NULL,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bankId" TEXT NOT NULL DEFAULT 'bank-id-fixed',

    CONSTRAINT "tb_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_account_bank" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "userId" TEXT NOT NULL DEFAULT 'bank-id-fixed',

    CONSTRAINT "tb_account_bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_bank" (
    "id" TEXT NOT NULL DEFAULT 'bank-id-fixed',

    CONSTRAINT "tb_bank_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_users" ADD CONSTRAINT "tb_users_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "tb_bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_toId_fkey" FOREIGN KEY ("toId") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "tb_bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_account_bank" ADD CONSTRAINT "tb_account_bank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
