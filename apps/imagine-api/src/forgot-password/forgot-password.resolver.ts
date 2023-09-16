import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {UserRepository} from '../database/user.repository';
import {ForgotPasswordService} from './forgot-password.service';
import {
  ForgotPasswordRequestCreateInput,
  ForgotPasswordRequestRedeemInput,
} from './forgot-password.input';

@Resolver(() => Boolean)
export class ForgotPasswordRequestResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly forgotPasswordService: ForgotPasswordService
  ) {}

  @Mutation(() => Boolean)
  async forgotPasswordRequestCreate(
    @Args('input', {type: () => ForgotPasswordRequestCreateInput})
    input: ForgotPasswordRequestCreateInput
  ): Promise<boolean> {
    const matchingUser = await this.userRepo.findOneOrFail({
      email: input.emailAddress,
    });
    await this.forgotPasswordService.createForgotPasswordRequest(
      matchingUser.id!
    );
    return true;
  }

  @Mutation(() => Boolean)
  async forgotPasswordRequestRedeem(
    @Args('input', {type: () => ForgotPasswordRequestRedeemInput})
    input: ForgotPasswordRequestRedeemInput
  ): Promise<boolean> {
    await this.forgotPasswordService.redeemForgotPasswordRequest(
      input.requestCode,
      input.newPassword
    );
    return true;
  }
}
