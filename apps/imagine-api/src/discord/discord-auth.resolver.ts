import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {DiscordAuthModel} from './discord-auth.model';
import {DiscordAuthInput} from './discord-auth.input';

@Resolver(() => DiscordAuthModel)
export class DiscordAuthResolver {
  @Mutation(() => DiscordAuthModel)
  async discordUserAuthentication(
    @Args('input', {type: () => DiscordAuthInput}) input: DiscordAuthInput
  ): Promise<DiscordAuthModel> {
    console.log(input.discordAuthToken);
    return {
      success: true,
    };
  }
}
