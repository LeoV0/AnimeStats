-- CreateEnum
CREATE TYPE "AnimeStatus" AS ENUM ('ONGOING', 'FINISHED', 'PAUSED');

-- CreateEnum
CREATE TYPE "UserAnimeStatusEnum" AS ENUM ('WATCHING', 'COMPLETED', 'DROPPED', 'PLAN_TO_WATCH');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_japanese" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "status" "AnimeStatus" NOT NULL,
    "total_episodes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" BIGSERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "aired_at" TIMESTAMP(3),
    "anime_id" BIGINT NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "anime_id" BIGINT NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_episode_progression" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "episode_id" BIGINT NOT NULL,
    "seen" BOOLEAN NOT NULL,

    CONSTRAINT "User_episode_progression_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_anime_status" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "anime_id" BIGINT NOT NULL,
    "status" "UserAnimeStatusEnum" NOT NULL,

    CONSTRAINT "User_anime_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_episode_progression" ADD CONSTRAINT "User_episode_progression_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_episode_progression" ADD CONSTRAINT "User_episode_progression_episode_id_fkey" FOREIGN KEY ("episode_id") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_anime_status" ADD CONSTRAINT "User_anime_status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_anime_status" ADD CONSTRAINT "User_anime_status_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
