import DayJS from 'dayjs';
import {Link} from 'wouter';
import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {ArticleWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';

const FETCH_LATEST_ARTICLE = gql`
  query {
      articles(other: { take: 1, order: { id: "DESC" } }) {
          id,
          name,
          description,
          content,
          imageURL,
          user {
              id,
              username,
              look,
          },
      }
  }
`

export function LatestArticleCard() {
  const {runQuery, loading, data} = useRunQuery<{articles: ArticleWire[]}>(FETCH_LATEST_ARTICLE)
  const latestArticle = data?.articles?.[0];

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <h5 className="silver">Latest Article
        <span className="float-right">
          <i className="fas fa-newspaper" />
        </span>
      </h5>
      {
        loading && (
          <i className="fa fa-spinner fa-spin fa-2x" />
        )
      }
      {
        latestArticle && (
          <div id="articles-strip">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <Link to={`/community/news/${latestArticle?.id}`} aria-label={latestArticle?.name}>
                    <div className="card-body" style={{backgroundImage: `url(${latestArticle?.imageURL})`}}>
                      <div className="avatar">
                        <img
                          src={`https://imager.habboon.pw?figure=${latestArticle?.user?.look}&size=m&direction=2&head_direction=2&gesture=sml&headonly=1`}
                          alt={latestArticle?.user?.username} data-toggle="tooltip" data-placement="top" data-title={latestArticle?.user?.username} loading="lazy"
                          data-original-title="" title="" />
                      </div>
                    </div>
                  </Link>
                  <div className="card-footer">
                    <h6>
                      <Link to={`/community/news/${latestArticle?.id}`} aria-label={latestArticle?.name}>
                        {latestArticle?.name}
                      </Link>
                    </h6>
                    <p>{latestArticle?.description}<br/><br/></p>
                    <div className="info">
                      <div className="initial">
                        <span className="username">{latestArticle?.user?.username}</span>
                        <span className="published"><i className="fas fa-clock" /> {DayJS(latestArticle?.createdAt).fromNow()}</span>
                      </div>
                      <div className="audience">
                        <span className="comments"><i className="fas fa-comments" /> 0</span>
                        <span className="views"><i className="fas fa-eye" /> 16</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
