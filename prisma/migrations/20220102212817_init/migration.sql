-- CreateTable
CREATE TABLE "Node" (
    "node_id" SERIAL NOT NULL,
    "name" TEXT,
    "url" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    "country" TEXT,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("node_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Node_url_key" ON "Node"("url");
