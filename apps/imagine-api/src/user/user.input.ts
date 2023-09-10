import {Field, InputType} from '@nestjs/graphql';
import {
  UserCreateInputDTO,
  UserGender,
  UserUpdateInputDTO,
} from '@imagine-cms/types';
import {
  IsEmail,
  MaxLength,
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  Max,
} from 'class-validator';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class UserCreateInput implements UserCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field(() => String, {nullable: true})
  @IsEnum(UserGender)
  @IsOptional()
  gender?: UserGender;

  @Field({nullable: true})
  @IsOptional()
  look?: string;
}

@InputType()
export class UserUpdateInput implements UserUpdateInputDTO {
  @Field({nullable: true})
  @IsNotEmpty()
  @IsOptional()
  password?: string;

  @Field({nullable: true})
  @IsEmail()
  @IsOptional()
  email!: string;

  @Field(() => UserGender, {nullable: true})
  @IsEnum(UserGender)
  @IsOptional()
  gender?: UserGender;

  @Field({nullable: true})
  @IsOptional()
  look?: string;
}

export enum UserOrderBy {
  ID_DESC = 'ID_DESC',
  CREDITS_ASC = 'CREDITS_ASC',
  PIXELS_ASC = 'PIXELS_ASC',
  POINTS_ASC = 'POINTS_ASC',
}

@InputType()
export class UserFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  usernames?: string[];

  @Field(() => Boolean, {nullable: true})
  online?: boolean;

  @Field(() => [String], {nullable: true})
  ipLast?: string[];

  @Field(() => [String], {nullable: true})
  ipRegistered?: string[];

  @Field(() => [String], {nullable: true})
  machineAddress?: string[];

  @Field(() => [UserOrderBy], {nullable: true})
  orderBy?: UserOrderBy[];

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class UserFilterOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  username?: string;
}
