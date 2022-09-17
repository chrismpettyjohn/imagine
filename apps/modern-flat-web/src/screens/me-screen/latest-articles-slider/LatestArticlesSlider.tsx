import React, {useEffect} from 'react';
import {Link, useLocation} from 'wouter';
import {useFetchLatestArticles} from '@imagine-cms/web';
import {Carousel} from '../../../components/carousel/Carousel';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function LatestArticlesSlider() {
  const [location, setLocation] = useLocation();
  const {runQuery, data, loading} = useFetchLatestArticles();
  const latestArticles = data?.articles ?? [];

  useEffect(() => {
    runQuery();
  }, [runQuery]);


  return (
    <LoadingOverlay loading={loading}>
      <Carousel
        slides={latestArticles.map(article => ({
          imageURL: article.imageURL!,
          label: article.name!,
          description: article.description!,
          content: (
            <div className="authors-details">
              <div className="written-by">
                <b>Posted by:</b>
                <Link to={`/profile/${article.user?.username}`}>
                  <span>{article.user?.username}</span>
                </Link>
              </div>
            </div>
          ),
          btnLabel: 'Read Article',
          btnAction: () => setLocation(`/community/news/${article.id}`),

        }))}
      />
    </LoadingOverlay>
  )
}
