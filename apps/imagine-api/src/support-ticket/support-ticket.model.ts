import {Field, ObjectType} from '@nestjs/graphql';
import {SupportTicketEntity} from '../database/support-ticket.entity';

@ObjectType()
export class SupportTicketModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  reportingUserID!: number;

  @Field(() => Number, {nullable: true})
  offendingUserID!: number;

  @Field(() => Number, {nullable: true})
  staffUserID!: number;

  static fromEntity(
    supportTicketEntity: SupportTicketEntity
  ): SupportTicketModel {
    return {
      id: supportTicketEntity.id!,
      reportingUserID: supportTicketEntity.senderID,
      offendingUserID: supportTicketEntity.reportedID,
      staffUserID: supportTicketEntity.modID,
    };
  }
}
