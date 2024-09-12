/*
  Warnings:

  - Changed the type of `type` on the `SocialLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `link` on the `SocialLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SocialLink" DROP COLUMN "type",
ADD COLUMN     "type" "Socials" NOT NULL,
DROP COLUMN "link",
ADD COLUMN     "link" TEXT NOT NULL;
