import {Field, InterfaceType} from '@nestjs/graphql';
import {ReactionType} from '../database/reaction.entity';

@InterfaceType()
export abstract class ReactionModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => ReactionType, {nullable: true})
  reaction?: ReactionType;

  @Field(() => Number, {nullable: true})
  createdAt?: number;

  @Field(() => Number, {nullable: true})
  updatedAt?: number;
}
