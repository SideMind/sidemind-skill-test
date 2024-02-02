-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dateInit" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateLimit" DATETIME,
    "status" TEXT NOT NULL DEFAULT Todo
);

-- CreateIndex
CREATE UNIQUE INDEX "tasks_name_key" ON "tasks"("name");
