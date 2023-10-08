import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { UserGuard } from '@imagine-cms/web';
import { Card } from '../../../components/card/Card';
import React, { SyntheticEvent, useState } from 'react';
import { useArticleCommentCreate } from '@imagine-cms/client';
import { Textarea } from '../../../components/textarea/Textarea';
import { ButtonBrand } from '../../../components/button/Button.remix';
import { GuestGuard } from '../../../components/guest-guard/GuestGuard';
import { ArticlePostCommentCardForm } from './ArticlePostCommentCard.styled';
import { ArticlePostCommentCardProps } from './ArticlePostCommentCard.types';

export function ArticlePostCommentCard({ articleID, onPost }: ArticlePostCommentCardProps) {
  const [comment, setComment] = useState('');
  const { data, execute } = useArticleCommentCreate();

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await execute({ articleID, comment });
      toast.success('Your comment was posted successfully');
      onPost(response);
      setComment('');
    } catch {
      toast.error('There was a problem creating your comment');
    }
  }

  return (
    <Card header="Post Comment">
      <ArticlePostCommentCardForm onSubmit={onSubmit}>
        <GuestGuard redirect={false}>
          <p><Link to="/login">Login</Link> to post comments</p>
        </GuestGuard>
        <UserGuard redirect={false}>
          <div className="form-group">
            <label htmlFor="comment" className="sr-only">Comment</label>
            <Textarea rows={8} id="comment" value={comment} onChange={setComment} />
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonBrand type="submit">Post</ButtonBrand>
          </div>
        </UserGuard>
      </ArticlePostCommentCardForm>
    </Card>
  )
}
