import {Field, InputType} from '@nestjs/graphql';
import {IsEmail, MaxLength, IsAlphanumeric, IsNotEmpty, IsOptional} from 'class-validator';

@InputType()
export class UserCreateInput {
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
}

@InputType()
export class UserUpdateInput {
  @Field({nullable: true})
  @IsNotEmpty()
  @IsOptional()
  password?: string;

  @Field({nullable: true})
  @IsEmail()
  @IsOptional()
  email!: string;
}
