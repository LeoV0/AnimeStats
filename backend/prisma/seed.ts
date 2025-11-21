// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   await prisma.anime.upsert({
//     where: { id: 16 },
//     update: { total_episodes: 26 },
//     create: {
//       id: 16,
//       name: 'Cowboy Bebop',
//       name_japanese: 'カウボーイビバップ',
//       description:
//         'In 2071, bounty hunters known as cowboys roam the solar system aboard the spaceship Bebop, chasing criminals for bounties while dealing with their pasts and searching for meaning in a chaotic universe.',
//       image_url: 'https://res.cloudinary.com/do22snhzp/image/upload/v1763571284/cowboy_bebop_4_jbrdgd.webp',
//       status: 'FINISHED',
//       total_episodes: 26,
//       episodes: {
//         create: [
//           { number: 1, title: 'Asteroid Blues' },
//           { number: 2, title: 'Stray Dog Strut' },
//           { number: 3, title: 'Honky Tonk Women' },
//           { number: 4, title: 'Gateway Shuffle' },
//           { number: 5, title: 'Ballad of Fallen Angels' },
//           { number: 6, title: 'Sympathy for the Devil' },
//           { number: 7, title: 'Heavy Metal Queen' },
//           { number: 8, title: 'Waltz for Venus' },
//           { number: 9, title: 'Jamming with Edward' },
//           { number: 10, title: 'Ganymede Elegy' },
//           { number: 11, title: 'Toys in the Attic' },
//           { number: 12, title: 'Jupiter Jazz (Part 1)' },
//           { number: 13, title: 'Jupiter Jazz (Part 2)' },
//           { number: 14, title: 'Bohemian Rhapsody' },
//           { number: 15, title: 'My Funny Valentine' },
//           { number: 16, title: 'Black Dog Serenade' },
//           { number: 17, title: 'Mushroom Samba' },
//           { number: 18, title: 'Speak Like a Child' },
//           { number: 19, title: 'Wild Horses' },
//           { number: 20, title: 'Pierrot le Fou' },
//           { number: 21, title: 'Boogie Woogie Feng Shui' },
//           { number: 22, title: 'Cowboy Funk' },
//           { number: 23, title: 'Brain Scratch' },
//           { number: 24, title: 'Hard Luck Woman' },
//           { number: 25, title: 'The Real Folk Blues (Part 1)' },
//           { number: 26, title: 'The Real Folk Blues (Part 2)' },
//         ],
//       },
//     },
//   });

//   console.log('COWBOY BEBOP ID 16 → INJECTÉ COMME UN GRAND. See you space cowboy...');
// }

// main()
//   .catch((e) => {
//     console.error('Erreur:', e);
//     process.exit(1);
//   })
//   .finally(async () => await prisma.$disconnect());