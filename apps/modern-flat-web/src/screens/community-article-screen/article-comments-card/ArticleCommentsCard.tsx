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
      <div className="card mb-0" id="comments">
        <div className="card-body">
          <h5 className="silver">Comments ({articleComments.length})</h5>
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
                        <img src={`https://imager.habboon.pw?figure=${articleComment.user?.look}&size=m&direction=3&head_direction=3&gesture=sml&headonly=1`} loading="lazy" />
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
        </div>
      </div>
    </LoadingOverlay>
  )
}
