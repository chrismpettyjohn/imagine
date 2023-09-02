import { toast } from 'react-toastify';
import { Card } from '../../../components/card/Card';
import { useArticleCommentCreate } from '@imagine-cms/web';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { ArticlePostCommentCardForm } from './ArticlePostCommentCard.styled';
import { ArticlePostCommentCardProps } from './ArticlePostCommentCard.types';

export function ArticlePostCommentCard({ articleID, onPost }: ArticlePostCommentCardProps) {
  const [comment, setComment] = useState('');
  const { runMutation, data, error, loading } = useArticleCommentCreate({
    articleID,
    comment,
  });

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error('There was a problem creating your comment');
      }
      if (data) {
        toast.success('Your comment was posted successfully');
        onPost(data.newComment);
        setComment('');
      }
    }
  }, [data, error, loading]);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (comment.length < 10) {
      toast.error('Comment must have at least 10 characters');
      return;
    }
    runMutation();
  }

  return (
    <Card header="Post Comment">
      <ArticlePostCommentCardForm onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="comment" className="sr-only">Comment</label>
          <textarea rows={8} id="comment" className="form-control" value={comment} onChange={e => setComment(e?.target?.value ?? '')} />
        </div>
        <div className="form-group mb-0">
          <button className="btn btn-primary btn-block" type="submit">Post</button>
        </div>
      </ArticlePostCommentCardForm>
    </Card>
  )
}
