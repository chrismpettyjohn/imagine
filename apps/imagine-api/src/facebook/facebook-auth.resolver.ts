import {FacebookService} from './facebook.service';
import {FacebookAuthModel} from './facebook-auth.model';
import {FacebookAuthInput} from './facebook-auth.input';
import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {FacebookAuthService} from './facebook-auth.service';

@Resolver(() => FacebookAuthModel)
export class FacebookAuthResolver {
  constructor(private readonly facebookAuthService: FacebookAuthService) {}
  @Mutation(() => FacebookAuthModel)
  async facebookUserAuthenticate(
    @Args('input', {type: () => FacebookAuthInput}) input: FacebookAuthInput
  ): Promise<FacebookAuthModel> {
    const facebookService = new FacebookService(input.facebookAuthToken);
    const facebookUser = await facebookService.getUser();
    const sessionToken =
      await this.facebookAuthService.facebookUserAuthenticate(
        facebookUser,
        '127.0.0.1'
      );
    return {
      sessionID: sessionToken.session.id!,
      userID: sessionToken.session.userID,
      sessionToken: sessionToken.accessToken,
    };
  }
}
