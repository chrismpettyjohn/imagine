import DayJS from 'dayjs';
import React from 'react';
import {Link} from 'wouter';
import {ArticleCardProps} from './ArticleCard.types';

export function ArticleCard({article}: ArticleCardProps) {
  return (
    <div id="articles-strip">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <Link to={`/community/news/${article?.id}`} aria-label={article?.name}>
              <div className="card-body" style={{backgroundImage: `url(${article?.imageURL})`}}>
                <div className="avatar">
                  <img
                    src={`https://imager.habboon.pw?figure=${article?.user?.look}&size=m&direction=2&head_direction=2&gesture=sml&headonly=1`}
                    alt={article?.user?.username} data-toggle="tooltip" data-placement="top" data-title={article?.user?.username} loading="lazy"
                    data-original-title="" title="" />
                </div>
              </div>
            </Link>
            <div className="card-footer">
              <h6>
                <Link to={`/community/news/${article?.id}`} aria-label={article?.name}>
                  {article?.name}
                </Link>
              </h6>
              <p>{article?.description}<br/><br/></p>
              <div className="info">
                <div className="initial">
                  <span className="username">{article?.user?.username}</span>
                  <span className="published"><i className="fas fa-clock" /> {DayJS(article?.createdAt).fromNow()}</span>
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
