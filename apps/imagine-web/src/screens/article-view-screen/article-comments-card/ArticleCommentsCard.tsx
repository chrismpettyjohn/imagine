import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { useArticleCommentFetchMany } from '@imagine-cms/client';
import { ArticleCommentsCardProps } from './ArticleCommentsCard.types';
import { ArticleCommentsCardHeader } from './ArticleCommentsCard.styled';
import { CommentContainer } from '../../../components/comment-container/CommentContainer';

export function ArticleCommentsCard({ articleID }: ArticleCommentsCardProps) {
  const { data, fetch } = useArticleCommentFetchMany();

  const articleComments = data ?? [];

  useEffect(() => {
    fetch({ articleIDs: [articleID] });
  }, [articleID]);

  return (
    <Card>
      <ArticleCommentsCardHeader>
        <h1>Comments ({articleComments.length})</h1>
      </ArticleCommentsCardHeader>
      {
        articleComments.length === 0 && <p>No comments found, be the first!</p>
      }
      <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
        {
          articleComments.map(articleComment => (

            <CommentContainer id={articleComment.id} comment={articleComment.comment} user={articleComment.user} key={`article_${articleID}_comment_${articleComment.id}`} />
          ))
        }
      </div>
    </Card>
  )
}
