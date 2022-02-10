/*
  Warnings:

  - The primary key for the `Node` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `node_id` on the `Node` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Node" DROP CONSTRAINT "Node_pkey",
DROP COLUMN "name",
DROP COLUMN "node_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "ip" TEXT,
ADD CONSTRAINT "Node_pkey" PRIMARY KEY ("id");
