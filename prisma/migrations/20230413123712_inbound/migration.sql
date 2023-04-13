-- CreateTable
CREATE TABLE "InboundPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inboundId" TEXT NOT NULL DEFAULT '',
    "inboundDate" TEXT DEFAULT '',
    "supplierId" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "InboundPage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inboundId" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "inboundNumber" TEXT DEFAULT '',
    "inboundPrice" TEXT DEFAULT '',
    "inboundTotal" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "InboundPage1_id_key" ON "InboundPage1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InboundPage2_id_key" ON "InboundPage2"("id");
