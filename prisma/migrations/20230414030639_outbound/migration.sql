-- CreateTable
CREATE TABLE "OutboundPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "outboundId" TEXT NOT NULL DEFAULT '',
    "outboundDate" TEXT DEFAULT '',
    "supplierId" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OutboundPage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "outboundId" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "outboundNumber" TEXT DEFAULT '',
    "outboundPrice" TEXT DEFAULT '',
    "outboundTotal" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OutboundPage3" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "outboundId" TEXT NOT NULL DEFAULT '',
    "outboundDate" TEXT DEFAULT '',
    "supplierId" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OutboundPage4" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "outboundId" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "outboundNumber" TEXT DEFAULT '',
    "outboundPrice" TEXT DEFAULT '',
    "outboundTotal" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "OutboundPage1_id_key" ON "OutboundPage1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OutboundPage2_id_key" ON "OutboundPage2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OutboundPage3_id_key" ON "OutboundPage3"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OutboundPage4_id_key" ON "OutboundPage4"("id");
