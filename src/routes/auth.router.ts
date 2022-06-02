import { User } from '@prisma/client';
import { Router } from 'express';
import passport from '../passport/local';
import { generateToken } from '../utils/auth';
import _ from 'underscore';

const router = Router();

router.post('/signup', async (req, res, next) => {
  passport.authenticate("signup", { session: false }, (err, user: User) => {
    if (err) throw new Error(err);

    const token = generateToken(user.id);

    const newUser: Omit<User, "password"> = user;

    return res.status(201).json({
      data: {
        status: "success",
        user: _.omit(user, "password"),
        token
      },
      statusCode: res.statusCode
    })
  })(req, res, next);
});

router.post("/signin", async (req, res, next) => {
  passport.authenticate("signin", { session: false }, (err, user: User) => {
    if (err) throw new Error(err);

    const token = generateToken(user.id);


    return res.status(201).json({
      status: "success",
      data: {
        user: _.omit(user, "password"),
        token
      },
      statusCode: res.statusCode
    })
  })(req, res, next);
});

export default router;
