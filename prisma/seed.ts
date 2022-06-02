import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async function main() {
  try {
    const johnDoe = await prisma.user.upsert({
      where: { email: 'johndoe@email.com' },
      update: {},
      create: {
        firstname: 'John',
        lastname: 'Doe',
        password: 'password',
        email: 'johndoe@email.com',
      },
    })

    console.log('Create 1 user', johnDoe)
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
