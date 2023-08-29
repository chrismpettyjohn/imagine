import {Field, InputType} from '@nestjs/graphql';
import {IsNotEmpty, IsOptional, IsEnum} from 'class-validator';
import {
  WordFilterCreateInputDTO,
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
}
