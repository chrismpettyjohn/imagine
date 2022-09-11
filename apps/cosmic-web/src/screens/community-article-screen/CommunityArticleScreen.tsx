import DayJS from 'dayjs';
import {Link, useRoute} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {configContext, useArticleFetchByID} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';
import {ArticleCommentsCard} from './article-comments-card/ArticleCommentsCard';
import {ArticlePostCommentCard} from './article-post-comment-card/ArticlePostCommentCard';

export function CommunityArticleScreen() {
  const {config} = useContext(configContext);
  const [_, params] = useRoute<{articleID: string}>('/community/articles/:articleID');

  const articleID = Number(params!.articleID);

  const {runQuery, data, loading} = useArticleFetchByID(articleID);

  useEffect(() => {
    runQuery();
  }, [params!.articleID]);

  return (
    <LoadingOverlay loading={loading}>
      <div className="articleComponent">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <img src={data?.article?.imageURL} className="card-img" />
                  <div className="card-header">
                    <div className="float-lg-start">
                      <img src="/assets/clock.gif" />
                      <span>{DayJS(data?.article?.createdAt).format(config!.dateFormat)}</span>
                    </div>
                    <div className="float-lg-end" style={{fontWeight: 500}}>
                      <a className="" href="#"  target="_self">
                        {data?.article?.user?.username}
                      </a>
                    </div>
                  </div>
                  <div className="card-body position-absolute text-white">
                    <h5>{data?.article?.name}</h5>
                    <span>{data?.article?.description}</span>
                  </div>
                  <div className="card-body">
                    {data?.article?.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <ArticleCommentsCard articleID={articleID} />
            </div>
            <div className="mb-4">
              <ArticlePostCommentCard articleID={articleID} onPost={newComment => console.log(newComment)} />
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  )
}
