import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import User from "../schemas/user.schema";
import "reflect-metadata";

const prisma = new PrismaClient();

@Resolver(() => User)
class UsersResolver {
  @Query(() => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    const users = prisma.user.findMany();
    console.log(users);
    return users;
  }
}

export default UsersResolver;
