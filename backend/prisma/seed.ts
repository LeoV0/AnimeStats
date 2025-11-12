// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // ----------------------------------------------------------------------
//   // 1. VINLAND SAGA → id: 3 → 48 ÉPISODES (vrais titres)
//   // ----------------------------------------------------------------------
//   await prisma.anime.upsert({
//     where: { id: 3 },
//     update: { total_episodes: 48 },
//     create: {
//       id: 3,
//       name: 'Vinland Saga',
//       name_japanese: 'ヴィンランド・サガ',
//       description:
//         'Thorfinn, a young Viking warrior, seeks revenge against Askeladd while dreaming of the peaceful land of Vinland.',
//       image_url:
//         'https://res.cloudinary.com/do22snhzp/image/upload/v1762958935/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc._V1_FMjpg_UX1000__qlbtm9.jpg',
//       status: 'FINISHED',
//       total_episodes: 48,
//       episodes: {
//         create: [
//           { number: 1, title: 'The End of the Prologue' },
//           { number: 2, title: 'The King of the North Sea' },
//           { number: 3, title: 'Troll' },
//           { number: 4, title: 'The Light of the Distant Sky' },
//           { number: 5, title: 'The Counter Weight' },
//           { number: 6, title: 'The Return to the Battlefield' },
//           { number: 7, title: 'The First Move' },
//           { number: 8, title: 'The Eulogy' },
//           { number: 9, title: 'Oath' },
//           { number: 10, title: 'The New Companion' },
//           { number: 11, title: 'The Last Victory' },
//           { number: 12, title: 'To the Sea' },
//           { number: 13, title: 'The Children of the Thaw' },
//           { number: 14, title: 'The Light of the Sunrise' },
//           { number: 15, title: 'The Discontent of the Pig' },
//           { number: 16, title: 'The Courtyard of the Dead' },
//           { number: 17, title: 'The White Bear in the Snow' },
//           { number: 18, title: 'Out of the Cradle' },
//           { number: 19, title: 'The Real First Night' },
//           { number: 20, title: 'Crown' },
//           { number: 21, title: 'Out of the Well' },
//           { number: 22, title: 'End of the Pilgrimage' },
//           { number: 23, title: 'The Prayer' },
//           { number: 24, title: 'The Sword' },
//           { number: 25, title: 'The Slave Merchant' },
//           { number: 26, title: 'The Way of the Viking' },
//           { number: 27, title: 'The Night' },
//           { number: 28, title: 'The King of the Woods' },
//           { number: 29, title: 'The Return' },
//           { number: 30, title: 'The Boy Who Came from the Sea' },
//           { number: 31, title: 'The Unstoppable' },
//           { number: 32, title: 'The Land of the Hanged Men' },
//           { number: 33, title: 'The Cursed Head' },
//           { number: 34, title: 'The Fated' },
//           { number: 35, title: 'The Messenger' },
//           { number: 36, title: 'The Stranger' },
//           { number: 37, title: 'The Secret of the Sun' },
//           { number: 38, title: 'The King of the Tundra' },
//           { number: 39, title: 'The Night of the Tundra' },
//           { number: 40, title: 'The Arrow in the Chest' },
//           { number: 41, title: 'The White Wolf' },
//           { number: 42, title: 'The Men of the North' },
//           { number: 43, title: 'The One-Eyed Man' },
//           { number: 44, title: 'The Prince of the Sea' },
//           { number: 45, title: 'The One Who Protects the King' },
//           { number: 46, title: 'The King of the Sea' },
//           { number: 47, title: 'The Setting Sun' },
//           { number: 48, title: 'One More Day' },
//         ],
//       },
//     },
//   });
//   console.log('Vinland Saga créé : id 3, 48 épisodes');

//   // ----------------------------------------------------------------------
//   // 2. GACHIAKUTA → id: 4 → 18 ÉPISODES (déjà bons)
//   // ----------------------------------------------------------------------
//   await prisma.anime.upsert({
//     where: { id: 4 },
//     update: { total_episodes: 24 },
//     create: {
//       id: 4,
//       name: 'Gachiakuta',
//       name_japanese: 'ガチアクタ',
//       description:
//         'A gritty story set in a dystopian world of trash and rebellion, following Rudo as he seeks justice.',
//       image_url:
//         'https://res.cloudinary.com/do22snhzp/image/upload/v1762958935/MV5BZDU5ZmEzODYtMDU2OS00NTZiLTk4MWYtYWUyZWUzNGU2ODdjXkEyXkFqcGc._V1__w6grqn.jpg',
//       status: 'ONGOING',
//       total_episodes: 24,
//       episodes: {
//         create: [
//           { number: 1, title: 'Yadori-mono' },
//           { number: 2, title: 'Cast into the Pit' },
//           { number: 3, title: 'After Awakening as a Giver' },
//           { number: 4, title: 'Soujiya Headquarters' },
//           { number: 5, title: 'The Storm House' },
//           { number: 6, title: 'A Proper Strike!!' },
//           { number: 7, title: 'Resolution' },
//           { number: 8, title: 'Full Speed Ahead' },
//           { number: 9, title: 'Graffiti Town' },
//           { number: 10, title: 'The Taboo of the Desert: Penta' },
//           { number: 11, title: "The Lady's Hospitality" },
//           { number: 12, title: 'Missing' },
//           { number: 13, title: 'Eyes of Emptiness' },
//           { number: 14, title: 'The Hidden Vital Instrument' },
//           { number: 15, title: "The Cleaners' Resolve" },
//           { number: 16, title: 'Anima Awakening' },
//           { number: 17, title: "Remlin's Shadow" },
//           { number: 18, title: 'The Abyss Beckons' },
//         ],
//       },
//     },
//   });
//   console.log('Gachiakuta créé : id 4, 18 épisodes');

//   console.log('SNK (id: 1) et Demon Slayer (id: 2) : inchangés');
// }

// main()
//   .catch((e) => {
//     console.error('Erreur seed :', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
