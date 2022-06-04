import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

dotenv.config()

const prisma = new PrismaClient()

export default passport.use(
  new Strategy(
    {
      passReqToCallback: true,
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload: any, cb: any) => {
      await prisma.user
        .findUnique({ where: { id: payload } })
        .then((user: any) => cb(null, user))
        .catch((err: any) => cb(err))
    }
  )
)
