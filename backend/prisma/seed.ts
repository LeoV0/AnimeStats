import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.anime.upsert({
    where: { id: 21 },
    update: {},
    create: {
      id: 21,
      name: 'Pokémon: Indigo League',
      name_japanese: 'ポケットモンスター',
      description:
        '10-year-old Ash Ketchum begins his journey to become a Pokémon Master with his partner Pikachu. Together with friends Misty and Brock, he travels across the Kanto region, challenges Gym Leaders, and faces the villainous Team Rocket.',
      image_url:
        'https://res.cloudinary.com/do22snhzp/image/upload/v1764147724/MV5BMzE0ZDU1MzQtNTNlYS00YjNlLWE2ODktZmFmNDYzMTBlZTBmXkEyXkFqcGc._V1_FMjpg_UX1000__ewtg9v.jpg',
      status: 'FINISHED',
      total_episodes: 82,
      episodes: {
        create: [
          { number: 1, title: 'Pokémon - I Choose You!' },
          { number: 2, title: 'Pokémon Emergency' },
          { number: 3, title: 'Ash Catches a Pokémon' },
          { number: 4, title: 'Challenge of the Samurai' },
          { number: 5, title: 'Showdown in Pewter City' },
          { number: 6, title: 'Clefairy and the Moon Stone' },
          { number: 7, title: 'The Water Flowers of Cerulean City' },
          { number: 8, title: 'The Path to the Pokémon League' },
          { number: 9, title: 'The School of Hard Knocks' },
          { number: 10, title: 'Bulbasaur and the Hidden Village' },
          { number: 11, title: 'Charmander – The Stray Pokémon' },
          { number: 12, title: 'Here Comes the Squirtle Squad' },
          { number: 13, title: 'Mystery at the Lighthouse' },
          { number: 14, title: 'Electric Shock Showdown' },
          { number: 15, title: 'Battle Aboard the St. Anne' },
          { number: 16, title: 'Pokémon Shipwreck' },
          { number: 17, title: 'Island of the Giant Pokémon' },
          { number: 18, title: 'Beauty and the Beach' },
          { number: 19, title: 'Tentacool & Tentacruel' },
          { number: 20, title: "The Ghost of Maiden's Peak" },
          { number: 21, title: 'Bye Bye Butterfree' },
          { number: 22, title: 'Abra and the Psychic Showdown' },
          { number: 23, title: 'The Tower of Terror' },
          { number: 24, title: 'Haunter versus Kadabra' },
          { number: 25, title: 'Primeape Goes Bananas' },
          { number: 26, title: 'Pokémon Scent-sation!' },
          { number: 27, title: "Hypno's Naptime" },
          { number: 28, title: 'Pokémon Fashion Flash' },
          { number: 29, title: 'The Punchy Pokémon' },
          { number: 30, title: 'Sparks Fly for Magnemite' },
          { number: 31, title: 'Dig Those Diglett!' },
          { number: 32, title: 'The Ninja Poké-Showdown' },
          { number: 33, title: 'The Flame Pokémon-athon!' },
          { number: 34, title: 'The Kangaskhan Kid' },
          { number: 35, title: 'The Legend of Dratini' }, // (banned in some countries)
          { number: 36, title: 'The Bridge Bike Gang' },
          { number: 37, title: "Ditto's Mysterious Mansion" },
          { number: 38, title: 'Cyber Soldier Porygon' }, // (the infamous banned episode)
          { number: 39, title: "Pikachu's Goodbye" },
          { number: 40, title: 'The Battling Eevee Brothers' },
          { number: 41, title: 'Wake Up, Snorlax!' },
          { number: 42, title: 'Showdown at Dark City' },
          { number: 43, title: 'The March of the Exeggutor Squad' },
          { number: 44, title: 'The Problem with Paras' },
          { number: 45, title: 'The Song of Jigglypuff' },
          { number: 46, title: 'Attack of the Prehistoric Pokémon' },
          { number: 47, title: 'A Chansey Operation' },
          { number: 48, title: 'Holy Matrimony!' },
          { number: 49, title: "So Near, Yet So Farfetch'd" },
          { number: 50, title: 'Who Gets to Keep Togepi?' },
          { number: 51, title: "Bulbasaur's Mysterious Garden" },
          { number: 52, title: 'Princess vs. Princess' },
          { number: 53, title: 'The Purr-fect Hero' },
          { number: 54, title: 'The Case of the K-9 Caper!' },
          { number: 55, title: 'Pokémon Paparazzi' },
          { number: 56, title: 'The Ultimate Test' },
          { number: 57, title: 'The Breeding Center Secret' },
          { number: 58, title: 'Riddle Me This' },
          { number: 59, title: 'Volcanic Panic' },
          { number: 60, title: 'Beach Blank-Out Blastoise' },
          { number: 61, title: 'The Misty Mermaid' },
          { number: 62, title: 'Clefairy Tales' },
          { number: 63, title: 'The Battle of the Badge' },
          { number: 64, title: "It's Mr. Mime Time" },
          { number: 65, title: 'Holiday Hi-Jynx' },
          { number: 66, title: 'Snow Way Out!' },
          { number: 67, title: 'Showdown at the Poké-Corral' },
          { number: 68, title: 'The Evolution Solution' },
          { number: 69, title: 'The Pi-Kahuna' },
          { number: 70, title: 'Make Room for Gloom' },
          { number: 71, title: 'Lights, Camera, Quack-tion!' },
          { number: 72, title: 'Go West Young Meowth' },
          { number: 73, title: 'To Master the Onixpected!' },
          { number: 74, title: 'The Ancient Puzzle of Pokémopolis' },
          { number: 75, title: 'Bad to the Bone' },
          { number: 76, title: 'All Fired Up!' },
          { number: 77, title: 'Round One – Begin!' },
          { number: 78, title: 'Fire and Ice' },
          { number: 79, title: 'The Fourth Round Rumble' },
          { number: 80, title: 'A Friend In Deed' },
          { number: 81, title: 'Friend and Foe Alike' },
          { number: 82, title: 'Friends to the End' },
        ],
      },
    },
  });

  console.log(
    'Pokémon: Indigo League (ID 2000) → 82/82 épisodes injectés ! GOTTA CATCH ‘EM ALL !',
  );
}

main()
  .catch((e) => {
    console.error('Erreur:', e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
