import {LanguageWire} from '@imagine-cms/types';
import {Field, GraphQLTimestamp, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class LanguageModel implements LanguageWire {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Boolean, {nullable: true})
  hidden!: boolean;

  @Field(() => String, {nullable: true})
  language!: string;

  @Field(() => String, {nullable: true})
  flagURL!: string;

  @Field(() => GraphQLTimestamp, {nullable: true})
  createdAt!: number;
}
