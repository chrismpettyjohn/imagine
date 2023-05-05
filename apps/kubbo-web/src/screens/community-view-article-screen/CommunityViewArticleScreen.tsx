import DayJS from 'dayjs';
import { Link, useRoute } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { configContext, useArticleFetchByID } from '@imagine-cms/web';
import { LatestArticlesList } from './latest-articles-list/LatestArticlesList';
import { LoadingOverlay } from '../../components/loading-overlay/LoadingOverlay';
import { ArticleCommentsCard } from './article-comments-card/ArticleCommentsCard';
import { ArticlePostCommentCard } from './article-post-comment-card/ArticlePostCommentCard';

export function CommunityViewArticleScreen() {
  const { config } = useContext(configContext);
  const [_, params] = useRoute<{ articleID: string }>('/community/articles/:articleID');

  const articleID = Number(params!.articleID);

  const { runQuery, data, loading } = useArticleFetchByID(articleID);

  useEffect(() => {
    runQuery();
  }, [params!.articleID]);

  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row articles-page">
        <div className="col-lg-3 col-12 d-none d-lg-block">
          <LatestArticlesList />
        </div>
        <div className="col-lg-9 col-12">
          <LoadingOverlay loading={loading}>
            <div className="card" id="article">
              <div className="card-body">
                <div id="header" className="mb-3" style={{ backgroundPosition: 'center', backgroundImage: `url(${data?.article?.imageURL})` }}>
                  <div className="avatar" style={{ backgroundImage: `url(https://imager.habboon.pw?figure=${data?.article?.user?.look}&size=m&direction=2&head_direction=2&gesture=sml&action=wav)` }} />
                  <h6>{data?.article?.name}<br />
                    <span>Posted by <Link to={`/profile/${data?.article?.user?.username}`}><a href="#" className="text-white font-weight-bold">{data?.article?.user?.username}</a></Link> on the <a href="#" className="text-white font-weight-bold">{DayJS(data?.article?.createdAt).format(config!.dateFormat)}</a></span></h6>
                </div>
                <p className="content">{data?.article?.content}</p>
              </div>
            </div>
            <ArticlePostCommentCard articleID={articleID} onPost={newComment => console.log(newComment)} />
            <ArticleCommentsCard articleID={articleID} />
          </LoadingOverlay>
        </div>
      </div>
    </main>
  )
}
