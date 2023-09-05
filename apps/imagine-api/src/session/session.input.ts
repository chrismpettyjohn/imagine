import {Field, InputType} from '@nestjs/graphql';
import {IsEmail, IsNotEmpty} from 'class-validator';

@InputType()
export class SessionUpdateEmailInput {
  @Field(() => String)
  @IsEmail()
  email!: string;

  @Field(() => String)
  @IsNotEmpty()
  password!: string;
}

@InputType()
export class SessionUpdatePasswordInput {
  @Field(() => String)
  @IsNotEmpty()
  currentPassword!: string;

  @Field(() => String)
  @IsNotEmpty()
  newPassword!: string;
}

@InputType()
export class SessionDisconnectAccountInput {
  @Field(() => Boolean)
  confirm!: boolean;
}
