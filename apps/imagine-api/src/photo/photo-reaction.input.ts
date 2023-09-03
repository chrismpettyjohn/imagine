import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '../database/reaction.entity';

@InputType()
export class PhotoReactionCreateInput {
  @Field(() => Number)
  photoID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class PhotoReactionUpdateInput {
  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class PhotoReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  photoIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}

@InputType()
export class PhotoReactionFilterOneInput {
  @Field(() => Number)
  id!: number;
}
