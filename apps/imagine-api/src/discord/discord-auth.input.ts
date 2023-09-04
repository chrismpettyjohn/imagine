import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class DiscordAuthInput {
  @Field(() => String)
  discordAuthToken!: string;
}
