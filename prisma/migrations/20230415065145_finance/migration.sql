-- CreateTable
CREATE TABLE "FinancePage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lock" BOOLEAN NOT NULL DEFAULT false,
    "date" TEXT NOT NULL DEFAULT '',
    "supplierName" TEXT DEFAULT '',
    "totalMoney" TEXT DEFAULT '',
    "payWay" TEXT DEFAULT '',
    "account" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "FinancePage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lock" BOOLEAN NOT NULL DEFAULT false,
    "date" TEXT NOT NULL DEFAULT '',
    "customerName" TEXT DEFAULT '',
    "totalMoney" TEXT DEFAULT '',
    "payWay" TEXT DEFAULT '',
    "account" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "FinancePage3" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lock" BOOLEAN NOT NULL DEFAULT false,
    "date" TEXT NOT NULL DEFAULT '',
    "driverName" TEXT DEFAULT '',
    "totalMoney" TEXT DEFAULT '',
    "payWay" TEXT DEFAULT '',
    "account" TEXT DEFAULT '',
    "operator" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "FinancePage1_id_key" ON "FinancePage1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FinancePage2_id_key" ON "FinancePage2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FinancePage3_id_key" ON "FinancePage3"("id");
