import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class UserPinnedFurnitureFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class UserPinnedFurnitureFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  furnitureIDs?: number[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class UserPinnedFurnitureCreateInput {
  @Field(() => Number)
  furnitureID!: number;
}
