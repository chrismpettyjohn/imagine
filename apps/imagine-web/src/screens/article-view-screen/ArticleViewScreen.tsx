import { useRoute } from 'wouter';
import React, { useEffect, useState } from 'react';
import { useArticleFetchOne } from '@imagine-cms/client';
import { GridLargeSmall } from '../../components/grid/Grid.remix';
import { ArticleCommentsCard } from './article-comments-card/ArticleCommentsCard';
import { LongUserContainer } from '../../components/long-user-container/LongUserContainer';
import { ArticlePostCommentCard } from './article-post-comment-card/ArticlePostCommentCard';
import { ArticleContentContainer, ArticleContentElement, ArticleHeaderBackground, ArticleHeaderContainer, ArticleHeaderContent, ArticleHeaderOverlay } from './ArticleViewScreen.styled';

export function ArticleViewScreen() {
  const [key, setKey] = useState(0);
  const fetchArticle = useArticleFetchOne();
  const [_, params] = useRoute<{ articleID: string }>('/articles/:articleID');
  const articleID = Number(params!.articleID);

  const onReloadArticleResources = () => {
    setKey(_ => _ + 1);
  }


  useEffect(() => {
    fetchArticle.fetch({ id: articleID });
  }, [articleID]);

  return (
    <>
      <ArticleHeaderContainer>
        <ArticleHeaderBackground src={fetchArticle.data?.imageURL} />
        <ArticleHeaderOverlay />
        <ArticleHeaderContent>
          <h1>{fetchArticle.data?.name}</h1>
          <p>{fetchArticle.data?.description}</p>
        </ArticleHeaderContent>
      </ArticleHeaderContainer >
      <br />
      <GridLargeSmall>
        <ArticleContentElement>
          <ArticleContentContainer>
            <div style={{ height: '100%' }}>
              <div dangerouslySetInnerHTML={{ __html: fetchArticle.data?.content ?? '' }} />
            </div>
            {fetchArticle.data?.user && <LongUserContainer user={fetchArticle.data.user as any} />}
          </ArticleContentContainer>
        </ArticleContentElement>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 16 }} key={`article_comments_${key}`}>
          <ArticleCommentsCard articleID={articleID} />
          <ArticlePostCommentCard articleID={articleID} onPost={onReloadArticleResources} />
        </div>
      </GridLargeSmall>
    </>
  )
}
