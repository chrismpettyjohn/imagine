import {Field, InputType} from '@nestjs/graphql';
import {IsOptional, IsUUID, Max} from 'class-validator';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class BetaCodeRedeemInput {
  @Field(() => String)
  betaCode!: string;
}

@InputType()
export class BetaCodeFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  @IsUUID('4', {each: true})
  @IsOptional()
  betaCodes?: string[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class BetaCodeFilterOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}
