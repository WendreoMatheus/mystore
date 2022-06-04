import { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'

import schema from '../schema'
import AuthRoutes from './auth.router'

const router = Router()

router.use(AuthRoutes)

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

export default router
