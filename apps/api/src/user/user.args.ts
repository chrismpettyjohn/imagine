import {UserModel} from './user.model';
import {ArgsType, Field} from '@nestjs/graphql';
import {CommonArgs} from '../utility/common.args';

@ArgsType()
export class UserArgs extends CommonArgs implements Partial<UserModel> {
  @Field({nullable: true})
  username?: string;
}
