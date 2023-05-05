import {LanguagePhraseTranslationWire} from '@imagine-cms/types';
import {Field, GraphQLTimestamp, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class LanguagePhraseTranslationModel
  implements LanguagePhraseTranslationWire
{
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  languageID!: number;

  @Field(() => Number, {nullable: true})
  languagePhraseID!: number;

  @Field(() => String, {nullable: true})
  translation!: string;

  @Field(() => GraphQLTimestamp, {nullable: true})
  createdAt!: number;

  @Field(() => GraphQLTimestamp, {nullable: true})
  updatedAt!: number;
}
