-- CreateEnum
CREATE TYPE "AnimeType" AS ENUM ('ANIME', 'MOVIE');

-- AlterTable
ALTER TABLE "Anime" ADD COLUMN     "studio" TEXT,
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "type" "AnimeType" NOT NULL DEFAULT 'ANIME';

-- CreateIndex
CREATE UNIQUE INDEX "Episode_anime_id_number_key" ON "Episode"("anime_id", "number");
