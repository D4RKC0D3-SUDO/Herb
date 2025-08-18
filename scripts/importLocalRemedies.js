// scripts/importLocalRemedies.js  (ESM)
import prisma from '../lib/prisma.js';
import { remedies } from '../data/remedies.js';

async function main() {
  for (const item of remedies) {
    const cleanedPrescription = String(item.prescription || item.name).trim();
    if (!cleanedPrescription) continue;

    await prisma.prescription.upsert({
      where: { prescription: cleanedPrescription },
      update: {},
      create: {
        prescription: cleanedPrescription,
        alternatives: {
          create: (item.alternatives || []).map(a => ({
            name: String(a.name || '').trim(),
            source: String(a.source || '').trim(),
            use: String(a.use || '').trim(),
            dosage: String(a.dosage || '').trim(),
          })).filter(a => a.name && a.source && a.use && a.dosage),
        },
      },
    });
    console.log('Upserted', cleanedPrescription);
  }

  console.log('Import complete');
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error('Import failed', e);
  await prisma.$disconnect();
  process.exit(1);
});
