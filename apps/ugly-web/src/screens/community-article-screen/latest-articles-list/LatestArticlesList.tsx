import {useLocation} from 'wouter';
import React, {useEffect} from 'react';
import {useFetchLatestArticles} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function LatestArticlesList() {
  const [location, setLocation] = useLocation();
  const {runQuery, loading, data} = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <LoadingOverlay loading={loading}>
      <div id="content-box">
        <div className="title-box png20">
          <div className="title">News</div>
        </div>
        <div className="png20">
          <ul className="news-list">
            {
              latestArticles?.map(article => (
                <li key={`latest_article_${article.id}`} style={{cursor: 'pointer'}} onClick={() => setLocation(`/community/news/${article.id}`)}>
                  <a className="selected">
                    {article.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </LoadingOverlay>
  )
}
