import {ChatlogWire} from '@imagine-cms/types';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ChatlogModel implements ChatlogWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  roomID?: number;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  createdAt?: string;
}
