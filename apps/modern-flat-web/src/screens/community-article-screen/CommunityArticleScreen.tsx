import {Link, useRoute} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {configContext, useArticleFetchByID} from '@imagine-cms/web';
import {LatestArticlesList} from './latest-articles-list/LatestArticlesList';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function CommunityArticleScreen() {
  const {config} = useContext(configContext);
  const [_, params] = useRoute<{articleID: string}>('/community/news/:articleID');

  const articleID = Number(params!.articleID);

  const {runQuery, data, loading} = useArticleFetchByID(articleID);

  useEffect(() => {
    runQuery();
  }, [params!.articleID]);

  return (
    <UserLayout>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <LatestArticlesList />
          </div>
          <div className="col-8">
            <LoadingOverlay loading={loading}>
            <div id="content-box">
                <div className="title-box png20">
                  <div className="title">{data?.article?.name}</div>
                  <div className="desc">{data?.article?.description}
                  </div>
                </div>
                <div className="png20" dangerouslySetInnerHTML={{__html: data?.article?.content}} />
            </div>
            </LoadingOverlay>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
