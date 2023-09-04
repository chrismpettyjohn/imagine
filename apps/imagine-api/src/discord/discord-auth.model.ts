import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class DiscordAuthModel {
  @Field(() => Boolean, {nullable: true})
  success!: boolean;
}
