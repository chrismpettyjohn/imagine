import {LanguagePhraseType, LanguagePhraseWire} from '@imagine-cms/types';
import {
  Field,
  GraphQLTimestamp,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

registerEnumType(LanguagePhraseType, {name: 'LanguagePhraseType'});

@ObjectType()
export class LanguagePhraseModel implements LanguagePhraseWire {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => String, {nullable: true})
  key!: string;

  @Field(() => LanguagePhraseType, {nullable: true})
  type!: LanguagePhraseType;

  @Field(() => String, {nullable: true})
  description!: string;

  @Field(() => GraphQLTimestamp, {nullable: true})
  createdAt!: number;
}
