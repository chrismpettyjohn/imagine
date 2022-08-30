import {Field, ID, ObjectType} from '@nestjs/graphql';
import {SessionCreatedWire, SessionWire} from '@imagine-cms/types';

@ObjectType()
export class SessionModel implements SessionWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  createdAt?: string;

  @Field({nullable: true})
  updatedAt?: string;
}

@ObjectType()
export class SessionCreatedModel implements SessionCreatedWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  accessToken?: string;
}
