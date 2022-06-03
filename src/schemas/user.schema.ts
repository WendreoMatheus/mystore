import 'reflect-metadata'

import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType({ description: 'User Object' })
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  email: string

  @Field()
  firstname: string

  @Field()
  password: string
}

@InputType({ description: 'User Create Data' })
export class UserInput {
  @Field()
  email!: string

  @Field()
  firstname!: string

  @Field()
  lastname!: string

  @Field()
  password!: string
}

@InputType({ description: 'User Update Data' })
export class UserUpdate {
  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  firstname: string

  @Field({ nullable: true })
  lastname: string

  @Field({ nullable: true })
  password: string
}
