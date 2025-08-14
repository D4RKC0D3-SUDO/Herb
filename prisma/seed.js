import prisma from '../lib/prisma.js';

async function main() {
  await prisma.prescription.upsert({
    where: { prescription: 'modafinil' },
    update: {},
    create: {
      prescription: 'modafinil',
      alternatives: {
        create: [
          {
            name: 'Rhodiola Rosea',
            source: 'Root',
            use: 'Boosts mental stamina',
            dosage: '200–400mg in the morning',
          },
        ],
      },
    },
  });

  console.log('Seeded modafinil ✅');
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
