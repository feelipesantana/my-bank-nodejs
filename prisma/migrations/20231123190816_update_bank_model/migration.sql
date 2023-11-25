/*
  Warnings:

  - Made the column `bankId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_bankId_fkey";

-- DropIndex
DROP INDEX "Bank_id_key";

-- AlterTable
ALTER TABLE "Bank" ALTER COLUMN "id" SET DEFAULT 'bank-id-fixed';

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "bankId" SET DEFAULT 'bank-id-fixed';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bankId" SET NOT NULL,
ALTER COLUMN "bankId" SET DEFAULT 'bank-id-fixed';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
