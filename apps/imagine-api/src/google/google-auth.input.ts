import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class GoogleAuthInput {
  @Field(() => String)
  googleAuthToken!: string;
}
