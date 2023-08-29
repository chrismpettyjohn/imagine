import {LanguageDTO} from '@imagine-cms/types';
import {Field, InputType} from '@nestjs/graphql';
import {IsAlphanumeric, IsBoolean, IsNotEmpty, IsUrl} from 'class-validator';

@InputType()
export class LanguageInput implements LanguageDTO {
  @Field(() => Boolean)
  @IsBoolean()
  hidden!: boolean;

  @Field(() => String)
  @IsNotEmpty()
  @IsAlphanumeric()
  language!: string;

  @Field(() => String)
  @IsUrl()
  flagURL!: string;
}
