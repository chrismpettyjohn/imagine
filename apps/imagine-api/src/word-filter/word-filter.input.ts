import {Field, InputType} from '@nestjs/graphql';
import {IsNotEmpty, IsOptional, IsEnum} from 'class-validator';
import {
  WordFilterBannableStatus,
  WordFilterCreateInputDTO,
  WordFilterStrictStatus,
  WordFilterUpdateInputDTO,
} from '@imagine-cms/types';

@InputType()
export class WordFilterCreateInput implements WordFilterCreateInputDTO {
  @Field()
  @IsNotEmpty()
  word!: string;

  @Field()
  @IsNotEmpty()
  replacement!: string;

  @Field()
  @IsEnum(WordFilterStrictStatus)
  strict!: WordFilterStrictStatus;

  @Field()
  @IsEnum(WordFilterBannableStatus)
  bannable!: WordFilterBannableStatus;
}

@InputType()
export class WordFilterUpdateInput implements WordFilterUpdateInputDTO {
  @Field()
  @IsNotEmpty()
  @IsOptional()
  word?: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  replacement?: string;

  @Field()
  @IsEnum(WordFilterStrictStatus)
  @IsOptional()
  strict?: WordFilterStrictStatus;

  @Field()
  @IsEnum(WordFilterBannableStatus)
  @IsOptional()
  bannable?: WordFilterBannableStatus;
}
