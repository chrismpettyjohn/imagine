import DayJS from 'dayjs';
import {Link} from 'wouter';
import React, {useEffect} from 'react';
import {ArticleCommentsCardProps} from './ArticleCommentsCard.types';
import {useArticleCommentsFetchByArticleID} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function ArticleCommentsCard({articleID}: ArticleCommentsCardProps) {
  const {runQuery, data, loading} = useArticleCommentsFetchByArticleID(articleID);

  const articleComments = data?.articleComments ?? [];

  useEffect(() => {
    runQuery();
  }, [articleID]);

  return (
    <LoadingOverlay loading={loading}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title-container d-flex">
            <div className="card-header-titles">
              <div className="card-header-title">Comments</div>
              <span className="card-header-subtitle"></span></div>
            </div>
        </div>
        {
          articleComments?.map(articleComment => (
            <div className="card-body oddeven m-0 p-0" key={`article_comment_${articleComment.id}`}>
              <div className="author">
                <div className="avatar">
                  <img className="avatar avatar-m mt-4" src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${articleComment.user?.look}&head_direction=2&direction=2&gesture=sml&size=m&headonly=0`} />
                </div>
                <div className="info">
              <span className="username">
                <Link to={`/profiles/${articleComment.user?.username}`}>{articleComment.user?.username}</Link>
              </span>
                  <span>
                    {articleComment.comment}
              </span>
                </div>
              </div>
            </div>
          ))
        }
        {
          articleComments?.length === 0 && (
            <div className="card-body">There are no comments</div>
          )
        }
      </div>
    </LoadingOverlay>
  )
}
