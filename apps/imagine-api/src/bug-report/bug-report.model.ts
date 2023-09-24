import {Field, ObjectType} from '@nestjs/graphql';
import {BugReportEntity} from '../database/bug-report.entity';

@ObjectType()
export class BugReportModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  reportingUserID!: number;

  @Field(() => String, {nullable: true})
  content!: string;

  @Field(() => Number, {nullable: true})
  severity!: number;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  @Field(() => Number, {nullable: true})
  updatedAt!: number;

  @Field(() => Number, {nullable: true})
  resolvedAt?: number;

  @Field(() => Number, {nullable: true})
  resolvingUserID?: number;

  static fromEntity(entity: BugReportEntity): BugReportModel {
    return {
      id: entity.id!,
      reportingUserID: entity.reportingUserID,
      content: entity.content,
      severity: entity.severity,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      resolvedAt: entity.resolvedAt,
      resolvingUserID: entity.resolvingUserID,
    };
  }
}
