import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class GoogleAuthModel {
  @Field(() => Number, {nullable: true})
  sessionID!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => String, {nullable: true})
  sessionToken!: string;
}
