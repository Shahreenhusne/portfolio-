-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "isEarlierRole" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "techStack" TEXT[];
