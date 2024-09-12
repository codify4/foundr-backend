/*
  Warnings:

  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - Added the required column `mrr` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oneLiner` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "description",
ADD COLUMN     "mrr" TEXT NOT NULL,
ADD COLUMN     "oneLiner" TEXT NOT NULL;
