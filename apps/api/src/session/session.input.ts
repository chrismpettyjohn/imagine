import {Field, InputType} from '@nestjs/graphql';
import {SessionCreateInputDTO} from '@imagine-cms/types';
import {MaxLength, IsAlphanumeric, IsNotEmpty} from 'class-validator';

@InputType()
export class SessionCreateInput implements SessionCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;
}
