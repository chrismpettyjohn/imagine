import {Injectable} from '@nestjs/common';
import {EmailCreateInput} from './email.types';
import {sendmailTransporter} from './sendmail.const';
import {EMAILS_INTERNAL_EMAIL_ADDRESS} from '../imagine.constant';

@Injectable()
export class EmailService {
  async sendEmail(input: EmailCreateInput): Promise<void> {
    return new Promise((resolve, reject) => {
      sendmailTransporter(
        {
          from: EMAILS_INTERNAL_EMAIL_ADDRESS,
          to: input.emailAddress,
          subject: input.subject,
          html: input.body,
        },
        (err, reply) => {
          if (err) {
            return reject(err);
          }
          console.log(`${EmailService.name}: ${reply}`);
          return resolve();
        }
      );
    });
  }
}
