import DayJS from 'dayjs';
import {Link} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {configContext, useFetchLatestArticles} from '@imagine-cms/web';

export function LatestArticles() {
  const {config} = useContext(configContext);
  const {runQuery, data} = useFetchLatestArticles(2);
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <div className="row">
      {
        latestArticles?.map(article => (
          <div className="col-md-6" key={`latest_article_${article.id}`}>
            <Link to={`/community/articles/1`} className="opacity-1">
              <div className="card">
                <img src={article.imageURL!} className="card-img" />
                <div className="card-header">
                  <div className="float-lg-start">
                    <img src="data:image/gif;base64,R0lGODlhEwAQAKIAAP///7GxsZCQkP8A//WGc8ogIIASEgAAACH5BAkIAAMALAAAAAATABAAAANuOHN8+qq5KKqQzd4lABBBIY5F0H1MF6wF4brlih5VABjtSxQGYF60FY5EMqw2jCFhdVjteIzHQbRkrgLPSURk8xw8PpF2IQIDvmAxZFown9OFMdv9BqilOAIdsDPIBXlufRtSH0NEBh1yGIwNCgkAOw==" />
                    <span>{DayJS(article.createdAt).format(config!.dateFormat)}</span>
                  </div>
                  <div className="float-lg-end" style={{fontWeight: 500}}>
                    <Link to={`/profile/${article.user?.username}`}>
                      {article.user?.username}
                    </Link>
                  </div>
                </div>
                <div className="card-body position-absolute text-white">
                  <h5>{article.name}</h5>
                  <span>{article.description}</span>
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
