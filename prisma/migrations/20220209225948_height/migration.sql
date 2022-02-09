/*
  Warnings:

  - You are about to drop the column `blockheight` on the `Node` table. All the data in the column will be lost.
  - Added the required column `height` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Node" DROP COLUMN "blockheight",
ADD COLUMN     "height" INTEGER NOT NULL;
