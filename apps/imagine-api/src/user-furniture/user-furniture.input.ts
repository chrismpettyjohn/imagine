import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';
import {FurnitureValueType} from '../database/furniture.entity';

@InputType()
export class UserFurnitureFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class UserFurnitureFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [Number], {nullable: true})
  roomIDs?: number[];

  @Field(() => [Number], {nullable: true})
  itemIDs?: number[];

  @Field(() => [FurnitureValueType], {nullable: true})
  valueTypes?: FurnitureValueType[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}
