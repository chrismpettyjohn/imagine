import React from 'react';
import { CommentContainerProps } from './CommentContainer.types';

export function CommentContainer({ comment, id, user }: CommentContainerProps) {
  return (
    <>
      User {user.username} said "{comment}" #{id}
    </>
  )
}