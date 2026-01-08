import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.anime.upsert({
        where: { id: 51 },
        update: {},
        create: {
          id: 51,
          name: "Cyberpunk: Edgerunners",
          name_japanese: "サイバーパンク エッジランナーズ",
          description:
            "In the dystopian Night City, David Martinez, a street kid, survives by becoming an edgerunner – a mercenary outlaw with cybernetic enhancements. After a tragedy, he joins Maine's crew with Lucy, Rebecca, and others. High-octane action, cyberpsychosis, tragic fates, and neon vibes in the Cyberpunk 2077 universe!",
          image_url:
            "https://res.cloudinary.com/do22snhzp/image/upload/v1765895421/made-this-cyberpunk-edgerunners-poster-around-two-years-ago-v0-yh5xtv1b09ld1_okwlo4.webp", // Poster officiel avec l'équipage
          status: 'FINISHED',
          total_episodes: 10,
          type: 'ANIME',
          studio: 'Studio Trigger / CD Projekt Red',
          tags: ["Action", "Sci-Fi", "Cyberpunk", "Psychological", "Tragedy", "Violence", "Netrunner", "Edgerunners", "Night City"],
          episodes: {
            create: [
              { number: 1, title: "Let You Down" },
              { number: 2, title: "Like A Boy" },
              { number: 3, title: "Smooth Criminal" },
              { number: 4, title: "Lucky You" },
              { number: 5, title: "All Eyez On Me" },
              { number: 6, title: "Girl on Fire" },
              { number: 7, title: "Stronger" },
              { number: 8, title: "Stay" },
              { number: 9, title: "Humanity" },
              { number: 10, title: "My Moon My Man" },
            ],
          },
        },
      });

  console.log("Fairy Tail → 328/328 épisodes injectés ! La guilde est prête pour l'aventure éternelle 🔥🧚");
}

main()
  .catch((e) => {
    console.error('Erreur:', e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());