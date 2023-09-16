import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ForgotPasswordRequestCreateInput {
  @Field(() => String)
  emailAddress!: string;
}

@InputType()
export class ForgotPasswordRequestRedeemInput {
  @Field(() => String)
  requestCode!: string;

  @Field(() => String)
  newPassword!: string;
}
