// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   await prisma.anime.upsert({
//     where: { id: 28 }, // change l'ID si besoin
//     update: {},
//     create: {
//       id: 28,
//       name: 'Assassination Classroom',
//       name_japanese: '暗殺教室',
//       description:
//         'A super-powered yellow octopus destroys 70% of the moon and gives humanity one year before he does the same to Earth. His only demand? Teach class 3-E of Kunugigaoka Junior High… and let the students try to assassinate him for a 10 billion yen reward. The ultimate mix of action, comedy, tears and life lessons.',
//       image_url:
//         'https://res.cloudinary.com/do22snhzp/image/upload/v1764235045/MV5BZjBkYmRiOTAtY2IwOS00ZWU3LTk3YjItNjMzYWZiMDE1MjcyXkEyXkFqcGc._V1__et3hjx.jpg',
//       status: 'FINISHED',
//       total_episodes: 48, // 47 TV + film live en bonus
//       episodes: {
//         create: [
//           // Saison 1 – 22 épisodes
//           { number: 1, title: 'Assassination Time' },
//           { number: 2, title: 'Baseball Time' },
//           { number: 3, title: 'Karma Time' },
//           { number: 4, title: 'Adult Time' },
//           { number: 5, title: 'Assembly Time' },
//           { number: 6, title: 'Test Time' },
//           { number: 7, title: 'School Trip Time · 1st Period' },
//           { number: 8, title: 'School Trip Time · 2nd Period' },
//           { number: 9, title: 'Transfer Student Time' },
//           { number: 10, title: 'L and R Time' },
//           { number: 11, title: 'Transfer Student Time · 2nd Period' },
//           { number: 12, title: 'Ball Game Tournament Time' },
//           { number: 13, title: 'Talent Time' },
//           { number: 14, title: 'Vision Time' },
//           { number: 15, title: 'End-of-Term Time' },
//           { number: 16, title: 'School’s In · 1st Semester' },
//           { number: 17, title: 'Island Time' },
//           { number: 18, title: 'Action Time' },
//           { number: 19, title: 'Pandemonium Time' },
//           { number: 20, title: 'Karma Time · 2nd Period' },
//           { number: 21, title: 'XX Time' },
//           { number: 22, title: 'Nagisa Time' },

//           // Saison 2 – 25 épisodes
//           { number: 23, title: 'Summer Festival Time' },
//           { number: 24, title: 'Kaede Time' },
//           { number: 25, title: 'Itona Horibe Time' },
//           { number: 26, title: 'Spinning Time' },
//           { number: 27, title: 'Leader Time' },
//           { number: 28, title: 'Before & After Time' },
//           { number: 29, title: 'Reaper Time · 1st Part' },
//           { number: 30, title: 'Reaper Time · 2nd Part' },
//           { number: 31, title: 'Round Two Time' },
//           { number: 32, title: 'School Festival Time' },
//           { number: 33, title: 'End-of-Term Time · 2nd Period' },
//           { number: 34, title: 'Think Outside the Box Time' },
//           { number: 35, title: 'Confession Time' },
//           { number: 36, title: 'Secret Identity Time' },
//           { number: 37, title: 'Past Time' },
//           { number: 38, title: 'Reaper Time · Final Part' },
//           { number: 39, title: 'Discord Time' },
//           { number: 40, title: 'Outcome Time' },
//           { number: 41, title: 'Outdoor School Time' },
//           { number: 42, title: 'Valentine’s Time' },
//           { number: 43, title: 'Trust Time' },
//           { number: 44, title: 'Happy Birthday Time' },
//           { number: 45, title: 'Final Boss Time' },
//           { number: 46, title: 'Graduation Time' },
//           { number: 47, title: 'Future Time' },

//           // Bonus
//           { number: 48, title: 'Assassination Classroom Live-Action Movie' },
//         ],
//       },
//     },
//   });

//   console.log(
//     'Assassination Classroom → 48/48 injectés ! NURUFUFUFU~ Koro-sensei est arrivé !',
//   );
// }

// main()
//   .catch((e) => {
//     console.error('Erreur:', e);
//     process.exit(1);
//   })
//   .finally(async () => await prisma.$disconnect());
