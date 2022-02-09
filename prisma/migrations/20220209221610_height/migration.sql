/*
  Warnings:

  - Added the required column `blockheight` to the `Node` table without a default value. This is not possible if the table is not empty.
  - Added the required column `port` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Node" ADD COLUMN     "blockheight" INTEGER NOT NULL,
ADD COLUMN     "port" INTEGER NOT NULL;
