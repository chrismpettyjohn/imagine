import {ArgsType, Field} from '@nestjs/graphql';
import {CommonArgs} from '../../common/common.args';

@ArgsType()
export class ArticleCommentArgs extends CommonArgs {
  @Field({nullable: true})
  articleID?: number;

  @Field({nullable: true})
  userID?: number;
}
