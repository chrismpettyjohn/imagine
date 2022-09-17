import {useRoute} from 'wouter';
import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';
import {ArticleContent} from './article-content/ArticleContent';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {LatestArticlesList} from './latest-articles-list/LatestArticlesList';

export function CommunityArticleScreen() {
  const {config} = useContext(configContext);
  const [_, params] = useRoute<{articleID: string}>('/community/news/:articleID');

  return (
    <UserLayout>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <LatestArticlesList />
          </div>
          <div className="col-8">
            <ArticleContent articleID={Number(params?.articleID)} />
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
