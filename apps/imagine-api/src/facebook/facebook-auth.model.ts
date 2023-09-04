import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class FacebookAuthModel {
  @Field(() => Number, {nullable: true})
  sessionID!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => String, {nullable: true})
  sessionToken!: string;
}
