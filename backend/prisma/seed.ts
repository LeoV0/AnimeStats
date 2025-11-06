import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.anime.create({
    data: {
      name: 'Attack on Titan',
      name_japanese: '進撃の巨人',
      description: 'Humans fight against Titans...',
      image_url:
        'https://res.cloudinary.com/do22snhzp/image/upload/v1762444670/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc._V1_FMjpg_UX1000__jluooj.jpg',
      status: 'FINISHED',
      total_episodes: 75,
    },
  });

  await prisma.anime.create({
    data: {
      name: 'Demon Slayer',
      name_japanese: '鬼滅の刃',
      description: 'Tanjiro fights demons...',
      image_url:
        'https://res.cloudinary.com/do22snhzp/image/upload/v1762444686/0198270_kmxfee.jpg',
      status: 'ONGOING',
      total_episodes: 26,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
