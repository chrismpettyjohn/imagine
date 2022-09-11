import {toast} from 'react-toastify';
import {useArticleCommentCreate} from '@imagine-cms/web';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {ArticlePostCommentCardProps} from './ArticlePostCommentCard.types';

export function ArticlePostCommentCard({articleID, onPost}: ArticlePostCommentCardProps) {
  const [comment, setComment] = useState('');
  const {runMutation, data, error, loading} = useArticleCommentCreate({
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
    <form onSubmit={onSubmit}>
      <div className="card">
        <div className="card-body p-0 m-0 bottom-0">
          <textarea rows={3} className="p-2 w-100 border-0" value={comment} onChange={e => setComment(e?.target?.value ?? '')} placeholder="Post your comment here" />
        </div>
        <div className="card-footer p-0 m-0">
          <button className="btn btn-success w-100" type="submit">React!</button>
        </div>
      </div>
    </form>
  )
}
