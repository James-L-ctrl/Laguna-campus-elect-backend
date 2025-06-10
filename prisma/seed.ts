import { PrismaClient } from '@prisma/client';
import { start } from 'repl';
const prisma = new PrismaClient();

async function seedflection() {
    const election = await prisma.election.create({
        where: {
            id: 'election-2025'
        },
        update: {

        },
        create: {
            id: 'election-2025',
            name: 'Election 2025',
            startDate: new Date('2025-01-01'),
            endDate: new Date('2025-12-31'),
            isActive: true
        }
    })
}

async function main() {
    console.log('seeding database')    
}