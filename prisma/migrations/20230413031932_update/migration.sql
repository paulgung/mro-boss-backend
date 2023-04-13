-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpportunityPage1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT DEFAULT '',
    "name" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);
INSERT INTO "new_OpportunityPage1" ("address", "companyName", "id", "name", "phone", "remark") SELECT "address", "companyName", "id", "name", "phone", "remark" FROM "OpportunityPage1";
DROP TABLE "OpportunityPage1";
ALTER TABLE "new_OpportunityPage1" RENAME TO "OpportunityPage1";
CREATE UNIQUE INDEX "OpportunityPage1_id_key" ON "OpportunityPage1"("id");
CREATE TABLE "new_OpportunityPage3" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL DEFAULT '',
    "area" TEXT DEFAULT '',
    "phone" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);
INSERT INTO "new_OpportunityPage3" ("area", "customerId", "customerName", "id", "phone", "remark") SELECT "area", "customerId", "customerName", "id", "phone", "remark" FROM "OpportunityPage3";
DROP TABLE "OpportunityPage3";
ALTER TABLE "new_OpportunityPage3" RENAME TO "OpportunityPage3";
CREATE UNIQUE INDEX "OpportunityPage3_id_key" ON "OpportunityPage3"("id");
CREATE UNIQUE INDEX "OpportunityPage3_customerId_key" ON "OpportunityPage3"("customerId");
CREATE TABLE "new_OpportunityPage4" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);
INSERT INTO "new_OpportunityPage4" ("id", "phone", "remark", "supplierId", "supplierName") SELECT "id", "phone", "remark", "supplierId", "supplierName" FROM "OpportunityPage4";
DROP TABLE "OpportunityPage4";
ALTER TABLE "new_OpportunityPage4" RENAME TO "OpportunityPage4";
CREATE UNIQUE INDEX "OpportunityPage4_id_key" ON "OpportunityPage4"("id");
CREATE UNIQUE INDEX "OpportunityPage4_supplierId_key" ON "OpportunityPage4"("supplierId");
CREATE TABLE "new_OpportunityPage2" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL DEFAULT '',
    "standard" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "unit" TEXT DEFAULT '',
    "remark" TEXT DEFAULT ''
);
INSERT INTO "new_OpportunityPage2" ("id", "productId", "productName", "remark", "standard", "type", "unit") SELECT "id", "productId", "productName", "remark", "standard", "type", "unit" FROM "OpportunityPage2";
DROP TABLE "OpportunityPage2";
ALTER TABLE "new_OpportunityPage2" RENAME TO "OpportunityPage2";
CREATE UNIQUE INDEX "OpportunityPage2_id_key" ON "OpportunityPage2"("id");
CREATE UNIQUE INDEX "OpportunityPage2_productId_key" ON "OpportunityPage2"("productId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
