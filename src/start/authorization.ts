import { PrismaClient } from "@prisma/client";
import passport from "../passport/jwt";

const auth = (req: any, res: any, next: any) => {
  try {
    passport.authenticate("jwt", { session: false }, (err: any, user: any) => {
      if (err) throw new Error(err);
      if (!user) throw new Error("Invalid token!");

      req.user = user;
      console.log(user);
      return next();
    })(req, res, next);
  } catch (err) {
    console.log(err);
  }
}

export default auth;
