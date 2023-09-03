import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PhotoCommentCreateInput {
  @Field(() => Number)
  photoID!: number;

  @Field(() => String)
  comment!: string;
}

@InputType()
export class PhotoCommentUpdateInput {
  @Field(() => String)
  comment!: string;
}

@InputType()
export class PhotoCommentFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  photoIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}
