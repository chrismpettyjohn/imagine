import {Field, InputType} from '@nestjs/graphql';
import {BadgeInputDTO} from '@imagine-cms/types';
import {MaxLength, IsAlphanumeric, IsNotEmpty} from 'class-validator';

@InputType()
export class BadgeInput implements BadgeInputDTO {
  @Field()
  @MaxLength(5)
  @IsNotEmpty()
  @IsAlphanumeric()
  code!: string;
}
