import {Field, ObjectType} from '@nestjs/graphql';
import {ReactionModel} from '../reaction/reaction.model';

@ObjectType()
export class PhotoReactionModel extends ReactionModel {
  @Field(() => Number, {nullable: true})
  photoID?: number;
}
