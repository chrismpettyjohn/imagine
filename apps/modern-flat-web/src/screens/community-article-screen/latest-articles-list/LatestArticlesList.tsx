import {Link} from 'wouter';
import React, {useEffect} from 'react';
import {useFetchLatestArticles} from '@imagine-cms/web';

export function LatestArticlesList() {
  const {runQuery, loading, data} = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <>
      <h5 className="silver">
        Recently Published
        <span className="float-right">
        <i className="fas fa-newspaper" />
      </span>
      </h5>
      <div>
        {
          loading && <i className="fa fa-spinner fa-spin" />
        }
        {
          latestArticles?.map(article => (
            <Link key={`latest_article_list_${article.id}`} to={`/community/articles/${article.id!}`} className="other" style={{backgroundPosition: 'center', backgroundImage: `url(${article.imageURL!}`}}>
              {article.name!}
            </Link>
          ))
        }
      </div>
    </>
  )
}
