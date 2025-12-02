// import { PrismaClient, AnimeType } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   const gachiakuta = {
//     id: 4,
//     name: "Gachiakuta",
//     studio: "Bones",
//     type: AnimeType.ANIME,
//     tags: ["Action", "Adventure", "Drama", "Fantasy", "Shounen"],
//   };

//   await prisma.anime.update({
//     where: { id: gachiakuta.id },
//     data: {
//       type: gachiakuta.type,
//       studio: gachiakuta.studio,
//       tags: gachiakuta.tags,
//     },
//   });

//   console.log(`04 ➜ ${gachiakuta.name} ✅ (Studio: ${gachiakuta.studio} | Tags: ${gachiakuta.tags.join(', ')})`);
//   console.log("\nGachiakuta est maintenant dans le game – tout est complet !");
// }

// main()
//   .catch(e => { console.error('Erreur:', e); process.exit(1); })
//   .finally(async () => await prisma.$disconnect());