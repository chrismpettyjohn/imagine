import {GoogleService} from './google.service';
import {GoogleAuthModel} from './google-auth.model';
import {GoogleAuthInput} from './google-auth.input';
import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {GoogleAuthService} from './google-auth.service';

@Resolver(() => GoogleAuthModel)
export class GoogleAuthResolver {
  constructor(private readonly googleAuthService: GoogleAuthService) {}
  @Mutation(() => GoogleAuthModel)
  async googleUserAuthenticate(
    @Args('input', {type: () => GoogleAuthInput}) input: GoogleAuthInput
  ): Promise<GoogleAuthModel> {
    const googleService = new GoogleService(input.googleAuthToken);
    const googleUser = await googleService.getUser();
    const sessionToken = await this.googleAuthService.googleUserAuthenticate(
      googleUser
    );
    return {
      sessionID: sessionToken.session.id!,
      userID: sessionToken.session.userID,
      sessionToken: sessionToken.accessToken,
    };
  }
}
