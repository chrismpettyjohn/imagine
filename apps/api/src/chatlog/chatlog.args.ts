import {ArgsType, Field} from '@nestjs/graphql';
import {CommonArgs} from '../utility/common.args';

@ArgsType()
export class ChatlogArgs extends CommonArgs {
  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  roomID?: number;
}
