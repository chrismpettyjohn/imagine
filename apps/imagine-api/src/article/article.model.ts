import {Field, ObjectType} from '@nestjs/graphql';
import {ArticleEntity} from '../database/article.entity';

@ObjectType()
export class ArticleModel {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  content?: string;

  @Field({nullable: true})
  imageURL?: string;

  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  createdAt?: number;

  static fromEntity(articleEntity: ArticleEntity): ArticleModel {
    return {
      id: articleEntity.id!,
      name: articleEntity.name,
      description: articleEntity.description,
      content: articleEntity.content,
      imageURL: articleEntity.imageURL,
      userID: articleEntity.userID,
      createdAt: +new Date(articleEntity.createdAt!),
    };
  }
}
