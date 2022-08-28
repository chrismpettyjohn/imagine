import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class SessionModel {
  @Field(() => ID)
  id!: string;

  @Field()
  userID!: number;
}
