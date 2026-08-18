-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Project',
ADD COLUMN     "confidential" BOOLEAN NOT NULL DEFAULT false;
