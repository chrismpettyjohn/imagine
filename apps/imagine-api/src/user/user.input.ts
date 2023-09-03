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
} from 'class-validator';

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

@InputType()
export class UserFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  usernames?: string[];

  @Field(() => Boolean, {nullable: true})
  online?: boolean;
}
