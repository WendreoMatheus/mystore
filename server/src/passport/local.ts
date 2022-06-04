import { PrismaClient } from '@prisma/client'
import passport from 'passport'
import { Strategy } from 'passport-local'

import { compare, hash } from '../utils/auth'

const prisma = new PrismaClient()

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, cb: any) => {
      try {
        const existsEmail = await prisma.user.findFirst({ where: { email } })
        if (existsEmail) {
          return cb(null, false, {
            message: 'Email already exists.',
            statusCode: 400,
          })
        }

        const user = await prisma.user.create({
          data: {
            ...req.body,
            email,
            password: await hash(password),
          },
        })

        return cb(null, user)
      } catch (e: any) {
        console.log(e.message)
        return cb(null, e)
      }
    }
  )
)

passport.use(
  'signin',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false,
    },
    async (email, password, cb: any) => {
      try {
        const user = await prisma.user.findFirst({ where: { email } })
        if (!user) {
          return cb(null, false, {
            message: 'No user found.',
            statusCode: 400,
          })
        }

        const validPassword = await compare(password, user.password)
        if (!validPassword) {
          return cb(null, false, {
            message: 'Invalid credentials!',
            statusCode: 401,
          })
        }

        return cb(null, user)
      } catch (err: any) {
        console.error(err.message)
        return cb(null, err)
      }
    }
  )
)

export default passport
