-- CreateTable
CREATE TABLE "LossPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "lossNumber" TEXT DEFAULT '',
    "lossPrice" TEXT DEFAULT '',
    "lossTotal" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "LossPage1_id_key" ON "LossPage1"("id");
