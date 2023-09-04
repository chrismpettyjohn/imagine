import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class FacebookAuthInput {
  @Field(() => String)
  facebookAuthToken!: string;
}
