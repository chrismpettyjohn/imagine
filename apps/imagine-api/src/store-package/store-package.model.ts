import {Field, ObjectType} from '@nestjs/graphql';
import {
  StorePackageBenefits,
  StorePackageEntity,
} from '../database/store-package.entity';

@ObjectType()
export class StorePackageBenefitsModel implements StorePackageBenefits {
  @Field(() => Number, {nullable: true})
  credits!: number;

  @Field(() => Number, {nullable: true})
  pixels!: number;

  @Field(() => Number, {nullable: true})
  points!: number;

  @Field(() => Number, {nullable: true})
  rankID!: number;

  @Field(() => [Number], {nullable: true})
  itemIDs!: number[];

  @Field(() => [String], {nullable: true})
  badgeCodes!: string[];
}

@ObjectType()
export class StorePackageModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => String, {nullable: true})
  title!: string;

  @Field(() => String, {nullable: true})
  description!: string;

  @Field(() => String, {nullable: true})
  content!: string;

  @Field(() => String, {nullable: true})
  imageURL!: string;

  @Field(() => Boolean, {nullable: true})
  isRecurring!: boolean;

  @Field(() => String, {nullable: true})
  totalCost!: string;

  @Field(() => String, {nullable: true})
  currency!: string;

  @Field(() => StorePackageBenefitsModel, {nullable: true})
  benefits!: StorePackageBenefitsModel;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  @Field(() => Number, {nullable: true})
  updatedAt!: number;

  static fromEntity(entity: StorePackageEntity): StorePackageModel {
    return {
      id: entity.id!,
      title: entity.title,
      description: entity.description,
      content: entity.content,
      imageURL: entity.imageURL,
      isRecurring: entity.isRecurring === 1,
      totalCost: entity.totalCost,
      currency: entity.currency,
      benefits: entity.benefits,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
