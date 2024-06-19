-- CreateTable
CREATE TABLE "Endorsement" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Endorsement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Endorsement" ADD CONSTRAINT "Endorsement_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
