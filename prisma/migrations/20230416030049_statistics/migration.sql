-- CreateTable
CREATE TABLE "StatisticsPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inboundId" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "inboundNumber" TEXT DEFAULT '',
    "outboundNumber" TEXT DEFAULT '',
    "lossNumber" TEXT DEFAULT '',
    "currentNumber" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "StatisticsPage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierName" TEXT DEFAULT '',
    "buyMoney" TEXT DEFAULT '',
    "payMoney" TEXT DEFAULT '',
    "totalMoney" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "StatisticsPage3" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerName" TEXT DEFAULT '',
    "buyMoney" TEXT DEFAULT '',
    "payMoney" TEXT DEFAULT '',
    "totalMoney" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "StatisticsPage4" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL DEFAULT '',
    "productName" TEXT DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "saleNumber" TEXT DEFAULT '',
    "salePrice" TEXT DEFAULT '',
    "costPrice" TEXT DEFAULT '',
    "saleTotal" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "StatisticsPage1_id_key" ON "StatisticsPage1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StatisticsPage2_id_key" ON "StatisticsPage2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StatisticsPage3_id_key" ON "StatisticsPage3"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StatisticsPage4_id_key" ON "StatisticsPage4"("id");
