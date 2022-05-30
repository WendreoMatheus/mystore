import { ObjectType, Field, ID } from 'type-graphql';
import "reflect-metadata";

@ObjectType()
class User {
  @Field((type) => ID)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;
}

export default User;
