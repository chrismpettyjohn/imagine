import { GoogleService } from './google.service';
import { GoogleAuthModel } from './google-auth.model';
import { GoogleAuthInput } from './google-auth.input';
import { GetIpAddress } from '../utility/get-ip-address';
import { GoogleAuthService } from './google-auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => GoogleAuthModel)
export class GoogleAuthResolver {
  constructor(private readonly googleAuthService: GoogleAuthService) { }
  @Mutation(() => GoogleAuthModel)
  async googleUserAuthenticate(
    @Args('input', { type: () => GoogleAuthInput }) input: GoogleAuthInput,
    @GetIpAddress() ipAddress: string
  ): Promise<GoogleAuthModel> {
    try {
      const googleService = new GoogleService(input.googleAuthToken);
      const googleUser = await googleService.getUser();
      const sessionToken = await this.googleAuthService.googleUserAuthenticate(
        googleUser,
        ipAddress
      );
      return {
        sessionID: sessionToken.session.id!,
        userID: sessionToken.session.userID,
        sessionToken: sessionToken.accessToken,
      };
    } catch (e: any) {
      throw e;
    }
  }
}
