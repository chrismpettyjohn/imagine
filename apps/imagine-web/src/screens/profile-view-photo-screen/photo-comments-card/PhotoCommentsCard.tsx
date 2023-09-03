import React, { useEffect, useMemo } from 'react';
import { Card } from '../../../components/card/Card';
import { usePhotoCommentFetchMany } from '@imagine-cms/client';
import { PhotoCommentsCardProps } from './PhotoCommentsCard.types';
import { CommentContainer } from '../../../components/comment-container/CommentContainer';

export function PhotoCommentsCard({ photo }: PhotoCommentsCardProps) {
  const { data, fetch, loading } = usePhotoCommentFetchMany();

  useEffect(() => {
    fetch({ photoIDs: [photo.id] });
  }, [photo.id]);

  const header = useMemo(() => {
    return (
      <>
        Comments ({data?.length ?? 0})
      </>
    )
  }, []);

  return (
    <Card header={header}>
      {
        loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      {
        data?.map(_ => (
          <CommentContainer key={`comment_${_.id}`} id={_.id} comment={_.comment} user={_.user} />
        ))
      }
    </Card>
  )
}