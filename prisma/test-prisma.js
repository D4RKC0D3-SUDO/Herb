// test-prisma.js
import { PrismaClient } from './app/generated/prisma/index.js';

const prisma = new PrismaClient();

async function test() {
  const all = await prisma.prescription.findMany();
  console.log(all);
  await prisma.$disconnect();
}

test();
