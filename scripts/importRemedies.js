import remedies from "../data/remedies.js"; // your existing file
import prisma from "../lib/prisma.js";

async function main() {
  for (const remedy of remedies) {
    await prisma.prescription.create({
      data: {
        name: remedy.name,
        description: remedy.description,
        alternatives: {
          create: remedy.alternatives,
        },
      },
    });
  }
  console.log("✅ Remedies imported successfully");
}

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
  });
