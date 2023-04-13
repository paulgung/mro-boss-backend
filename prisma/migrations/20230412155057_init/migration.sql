-- CreateTable
CREATE TABLE "OpportunityPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "phone" TEXT DEFAULT '',
    "name" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OpportunityPage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OpportunityPage3" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "area" TEXT DEFAULT '',
    "phone" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "OpportunityPage4" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,
    "phone" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage1_id_key" ON "OpportunityPage1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage1_companyName_key" ON "OpportunityPage1"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage2_id_key" ON "OpportunityPage2"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage2_productId_key" ON "OpportunityPage2"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage2_productName_key" ON "OpportunityPage2"("productName");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage3_id_key" ON "OpportunityPage3"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage3_customerId_key" ON "OpportunityPage3"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage3_customerName_key" ON "OpportunityPage3"("customerName");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage4_id_key" ON "OpportunityPage4"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage4_supplierId_key" ON "OpportunityPage4"("supplierId");

-- CreateIndex
CREATE UNIQUE INDEX "OpportunityPage4_supplierName_key" ON "OpportunityPage4"("supplierName");
