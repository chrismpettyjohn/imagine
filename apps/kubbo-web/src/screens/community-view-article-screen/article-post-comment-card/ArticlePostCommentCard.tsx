import {toast} from 'react-toastify';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {useArticleCommentCreate} from '@imagine-cms/web';
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
    <div className="card">
      <div className="card-body">
        <h5 className="silver">Post a comment...</h5>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="comment" className="sr-only">Comment</label>
            <textarea rows={3} id="comment" className="form-control" value={comment} onChange={e => setComment(e?.target?.value ?? '')} />
          </div>
          <div className="form-group mb-0">
            <button className="btn btn-primary btn-block" type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}
