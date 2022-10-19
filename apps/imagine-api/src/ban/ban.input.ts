import {Field, InputType} from '@nestjs/graphql';
import {BanCreateInputDTO, BanUpdateInputDTO} from '@imagine-cms/types';
import {IsNumber, IsNotEmpty, IsOptional, IsDateString} from 'class-validator';

@InputType()
export class BanCreateInput implements BanCreateInputDTO {
  @Field()
  @IsNumber()
  bannedUserID!: number;

  @Field()
  @IsNotEmpty()
  reason!: string;

  @Field()
  @IsDateString()
  expiresAt!: string;
}

@InputType()
export class BanUpdateInput implements BanUpdateInputDTO {
  @Field()
  @IsNumber()
  @IsOptional()
  bannedUserID?: number;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  reason?: string;

  @Field()
  @IsDateString()
  @IsOptional()
  expiresAt?: string;
}
