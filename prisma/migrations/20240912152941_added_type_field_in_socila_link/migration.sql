/*
  Warnings:

  - You are about to drop the column `image` on the `SocialLink` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `SocialLink` table. All the data in the column will be lost.
  - Added the required column `type` to the `SocialLink` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `link` on the `SocialLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Socials" AS ENUM ('twitter', 'instagram', 'facebook', 'linkedin', 'github', 'website');

-- AlterTable
ALTER TABLE "SocialLink" DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "type" TEXT NOT NULL,
DROP COLUMN "link",
ADD COLUMN     "link" "Socials" NOT NULL;
