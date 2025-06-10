import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PRESIDENT25_ID = "election-2025-president";

async function seedElection() {
const election25 = await prisma.election.upsert({
where: { id: 'election-2025' },
update: {},
create: {
id: 'election-2025',
name: 'Election 2025',
startDate: new Date('2025-05-26T00:00:00Z'),
endDate: new Date('2025-06-26T23:59:59Z'),
description: 'University Student Council Elections 2025',
isActive: true
}
});
}

async function main() {
console.log("SEEDING DATABASE...");

await seedElection();

console.log("Finished SEEDING");
}

main();