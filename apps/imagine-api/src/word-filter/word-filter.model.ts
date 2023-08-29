import {Field, ObjectType} from '@nestjs/graphql';
import {WordFilterWire} from '@imagine-cms/types';

@ObjectType()
export class WordFilterModel implements WordFilterWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  word?: string;

  @Field({nullable: true})
  replacement?: string;
}
