/*
  Warnings:

  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,episode_id]` on the table `User_episode_progression` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("user_id", "anime_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_episode_progression_user_id_episode_id_key" ON "User_episode_progression"("user_id", "episode_id");
