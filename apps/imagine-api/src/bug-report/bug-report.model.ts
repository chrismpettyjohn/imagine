import {Field, ObjectType} from '@nestjs/graphql';
import {BugReportEntity} from '../database/bug-report.entity';

@ObjectType()
export class BugReportModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  reportingUserID!: number;

  @Field(() => String, {nullable: true})
  title!: string;

  @Field(() => String, {nullable: true})
  content!: string;

  @Field(() => String, {nullable: true})
  url!: string;

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
      title: entity.title,
      content: entity.content,
      url: entity.url,
      severity: entity.severity,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      resolvedAt: entity.resolvedAt,
      resolvingUserID: entity.resolvingUserID,
    };
  }
}
