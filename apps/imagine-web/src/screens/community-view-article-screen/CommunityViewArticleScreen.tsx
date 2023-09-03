import DayJS from 'dayjs';
import { Link, useRoute } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { configContext, useArticleFetchByID } from '@imagine-cms/web';
import { LoadingOverlay } from '../../components/loading-overlay/LoadingOverlay';
import { ArticleCommentsCard } from './article-comments-card/ArticleCommentsCard';
import { ArticlePostCommentCard } from './article-post-comment-card/ArticlePostCommentCard';
import { ArticleContentContainer, ArticleContentElement, ArticleHeaderBackground, ArticleHeaderContainer, ArticleHeaderContent, ArticleHeaderOverlay } from './CommunityViewArticleScreen.styled';
import { LongUserContainer } from '../../components/long-user-container/LongUserContainer';

export function CommunityViewArticleScreen() {
  const { config } = useContext(configContext);
  const [_, params] = useRoute<{ articleID: string }>('/community/articles/:articleID');

  const articleID = Number(params!.articleID);

  const { runQuery, data, loading } = useArticleFetchByID(articleID);

  const article = data?.article;

  useEffect(() => {
    runQuery();
  }, [params!.articleID]);

  return (
    <>
      <ArticleHeaderContainer>
        <ArticleHeaderBackground src={article?.imageURL} />
        <ArticleHeaderOverlay />
        <ArticleHeaderContent>
          <h1>{article?.name}</h1>
          <p>{article?.description}</p>
        </ArticleHeaderContent>
      </ArticleHeaderContainer>
      <ArticleContentElement>
        <ArticleContentContainer>
          <div dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} />
          {article?.user && <LongUserContainer user={article.user} />}
        </ArticleContentContainer>
      </ArticleContentElement>
      <br />
      <ArticleCommentsCard articleID={articleID} />
      <br />
      <ArticlePostCommentCard articleID={articleID} onPost={() => console.log('todo')} />
    </>
  )
}
