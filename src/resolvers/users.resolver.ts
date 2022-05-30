import { PrismaClient } from "@prisma/client";
import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { User, UserInput, UserUpdate } from "../schemas/user.schema";
import "reflect-metadata";

const prisma = new PrismaClient();

@Resolver(() => User)
class UsersResolver {
  @Query(() => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg("email") email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  @Mutation(() => User)
  async createUser(@Arg("user") input: UserInput): Promise<User> {
    return await prisma.user.create({
      data: input
    })
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: number,
    @Arg("user") input: UserUpdate): Promise<User> {
    return await prisma.user.update({
      where: {
        id
      },
      data: input
    })
  }
  @Mutation(() => User)
  async deleteUser(@Arg("id") id: number): Promise<User> {
    return prisma.user.delete({
      where: {
        id,
      },
    })
  }

}

export default UsersResolver;
