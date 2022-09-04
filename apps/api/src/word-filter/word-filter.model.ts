import {Field, ID, ObjectType} from '@nestjs/graphql';
import {WordFilterBannableStatus, WordFilterStrictStatus, WordFilterWire} from '@imagine-cms/types';

@ObjectType()
export class WordFilterModel implements WordFilterWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  word?: string;

  @Field({nullable: true})
  replacement?: string;

  @Field({nullable: true})
  strict?: WordFilterStrictStatus;

  @Field({nullable: true})
  bannable?: WordFilterBannableStatus;

  @Field({nullable: true})
  addedByUserID?: number;
}
