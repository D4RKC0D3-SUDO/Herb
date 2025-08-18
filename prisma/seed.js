// prisma/seed.js
import prisma from '../lib/prisma.js';

async function main() {
  await prisma.prescription.upsert({
    where: { name: 'Paracetamol' },
    update: {},
    create: {
      name: 'Paracetamol',
      description: 'Pain relief and fever reducer', // ❌ Not in model — remove or add to schema
      alternatives: {
        create: [
          { name: 'Ginger tea', use: 'Anti-inflammatory', source: 'Ginger root', dosage: '1 cup twice daily' },
          { name: 'Turmeric milk', use: 'Pain relief', source: 'Turmeric powder', dosage: '1 glass daily' }
        ]
      }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('✅ Database seeded successfully');
  })
  .catch(async (e) => {
    console.error('❌ Seed failed', e);
    await prisma.$disconnect();
    process.exit(1);
  });
