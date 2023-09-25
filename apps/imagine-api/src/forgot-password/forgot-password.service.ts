import DayJS from 'dayjs';
import {v4 as uuidv4} from 'uuid';
import {HashService} from '../common/hash.service';
import {EmailService} from '../email/email.service';
import {UserRepository} from '../database/user.repository';
import {BadRequestException, Injectable} from '@nestjs/common';
import {FORGOT_PASSWORD_EXPIRATION_LENGTH_HOURS} from '../imagine.constant';
import {forgotPasswordRequestSentTemplate} from './forgot-password-request-sent.template';
import {ForgotPasswordRequestRepository} from '../database/forgot-password-request.repository';
import {forgotPasswordRequestConfirmationTemplate} from './forgot-password-request-confirmation.template';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly emailService: EmailService,
    private readonly hashService: HashService,
    private readonly userRepo: UserRepository,
    private readonly forgotPasswordRequestRepo: ForgotPasswordRequestRepository
  ) {}

  async createForgotPasswordRequest(userID: number): Promise<void> {
    const createdAt = DayJS().unix();
    const expiresAt = DayJS()
      .add(FORGOT_PASSWORD_EXPIRATION_LENGTH_HOURS, 'hours')
      .unix();
    const requestCode = uuidv4();
    await this.forgotPasswordRequestRepo.create({
      userID,
      createdAt,
      expiresAt,
      requestCode,
    });
    const matchingUser = await this.userRepo.findOneOrFail({id: userID});
    if (!matchingUser.email) {
      throw new BadRequestException();
    }
    const forgotPasswordRequestEmailBody =
      forgotPasswordRequestSentTemplate(requestCode);
    await this.emailService.sendEmail({
      emailAddress: matchingUser.email,
      subject: 'Password Reset',
      body: forgotPasswordRequestEmailBody,
    });
  }

  async redeemForgotPasswordRequest(
    forgotPasswordRequestCode: string,
    newPassword: string
  ): Promise<void> {
    const matchingForgotPasswordRequest =
      await this.forgotPasswordRequestRepo.findOneOrFail({
        requestCode: forgotPasswordRequestCode,
      });
    if (matchingForgotPasswordRequest.redeemedAt) {
      throw new BadRequestException();
    }
    const currentDate = DayJS().unix();
    const forgotPasswordRequestExpired =
      currentDate > matchingForgotPasswordRequest.expiresAt;
    if (forgotPasswordRequestExpired) {
      throw new BadRequestException();
    }
    await this.forgotPasswordRequestRepo.update(
      {id: matchingForgotPasswordRequest.id!},
      {redeemedAt: currentDate}
    );
    const hashedPassword = this.hashService.generate(newPassword);
    await this.userRepo.update(
      {id: matchingForgotPasswordRequest.userID},
      {password: hashedPassword}
    );
    const matchingUser = await this.userRepo.findOneOrFail({
      id: matchingForgotPasswordRequest.userID,
    });
    if (!matchingUser.email) {
      throw new BadRequestException();
    }
    const forgotPasswordRequestEmailBody =
      forgotPasswordRequestConfirmationTemplate();
    await this.emailService.sendEmail({
      emailAddress: matchingUser.email,
      subject: 'Password Reset - Confirmation',
      body: forgotPasswordRequestEmailBody,
    });
  }
}
