import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
const prisma = new PrismaClient()

const router = Router()

router.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

export default router
