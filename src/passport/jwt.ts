import { PrismaClient } from '@prisma/client';
import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export default passport.use(new Strategy({
  passReqToCallback: true,
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload: any, cb: any) => {
  await prisma.user.findUnique({ where: { id: payload } })
    .then((user: any) => cb(null, user))
    .catch((err: any) => cb(err))
}));

