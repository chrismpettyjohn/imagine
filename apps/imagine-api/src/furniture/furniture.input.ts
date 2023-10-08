import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {FurnitureValueType} from '../database/furniture.entity';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

export enum FurnitureOrderBy {
  GREATEST_VALUE_TYPE = 'GREATEST_VALUE_TYPE',
}

@InputType()
export class FurnitureFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class FurnitureFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [FurnitureValueType], {nullable: true})
  valueTypes?: FurnitureValueType[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;

  @Field(() => [FurnitureOrderBy], {nullable: true})
  orderBy?: FurnitureOrderBy[];
}
