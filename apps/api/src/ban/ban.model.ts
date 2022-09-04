import {BanWire} from '@imagine-cms/types';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class BanModel implements BanWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  bannedUserID?: number;

  @Field({nullable: true})
  addedByUserID?: number;

  @Field({nullable: true})
  type?: string;

  @Field({nullable: true})
  reason?: string;

  @Field({nullable: true})
  createdAt?: string;

  @Field({nullable: true})
  expiresAt?: string;
}
