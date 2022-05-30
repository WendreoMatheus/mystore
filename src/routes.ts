import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' })
})

router.get('/users', async (_req, res) => {
  const allUsers = await prisma.user.findMany()

  res.json({ users: allUsers })
})

export default router
