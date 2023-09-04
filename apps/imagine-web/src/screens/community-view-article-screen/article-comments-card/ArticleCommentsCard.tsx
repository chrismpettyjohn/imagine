import DayJS from 'dayjs';
import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { useArticleCommentFetchMany } from '@imagine-cms/client';
import { ArticleCommentsCardProps } from './ArticleCommentsCard.types';
import { ArticleCommentsCardHeader } from './ArticleCommentsCard.styled';
import { Avatar } from '../../../components/avatar/Avatar';

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
      {
        articleComments.map(articleComment => (
          <div className="card mb-0" key={`article_comment_${articleComment.id!}`}>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="avatar orange">
                    <Avatar look={articleComment.user?.look ?? '-'} headOnly />
                  </div>
                </div>
                <div className="col-9">
                  <p className="mb-0">
                    <Link to={`/profile/${articleComment.user?.username}`}><a href="#">{articleComment.user?.username}</a></Link> <small className="float-right text-muted">{DayJS(articleComment.createdAt).fromNow()}</small></p>
                  <p className="text mb-0">
                    {articleComment.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </Card>
  )
}
