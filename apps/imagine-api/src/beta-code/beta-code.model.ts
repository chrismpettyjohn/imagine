import {Field, ObjectType} from '@nestjs/graphql';
import {BetaCodeEntity} from '../database/beta-code.entity';

@ObjectType()
export class BetaCodeModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => String, {nullable: true})
  betaCode!: string;

  @Field(() => Number, {nullable: true})
  userID?: number;

  static fromEntity(entity: BetaCodeEntity): BetaCodeModel {
    return {
      id: entity.id!,
      betaCode: entity.betaCode,
      userID: entity.userID,
    };
  }
}
