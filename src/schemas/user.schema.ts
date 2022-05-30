import { ObjectType, Field, ID, InputType } from 'type-graphql';
import "reflect-metadata";

@ObjectType({ description: "User Object" })
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;
}

@InputType({ description: "User Create Data" })
export class UserInput {
  @Field()
  name!: string

  @Field()
  email!: string
}

@InputType({ description: "User Update Data" })
export class UserUpdate {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;
}

