import React, {useEffect} from 'react';
import {ArticleContentProps} from './ArticleContent.types';
import {useArticleFetchByID} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function ArticleContent({ articleID }: ArticleContentProps) {
  const {runQuery, data, loading} = useArticleFetchByID(articleID ?? 0);

  useEffect(() => {
    runQuery();
  }, [articleID]);

  if (!articleID) {
    return null;
  }

  return (
    <LoadingOverlay loading={loading}>
      <div id="content-box">
        <div className="title-box png20">
          <div className="title">{data?.article?.name}</div>
          <div className="desc">{data?.article?.description}
          </div>
        </div>
        <div className="png20" dangerouslySetInnerHTML={{__html: data?.article?.content ?? ''}} />
      </div>
    </LoadingOverlay>
  )
}
