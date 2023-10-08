import React from 'react';
import { CommentContainerProps } from './CommentContainer.types';
import { CommentContainerAvatar, CommentContainerContent, CommentContainerElement, CommentContainerMessage, CommentContainerUser } from './CommentContainer.styled';
import { Link } from 'wouter';

export function CommentContainer({ comment, id, user }: CommentContainerProps) {
  return (
    <CommentContainerElement>
      <CommentContainerContent>
        <Link to={`/profile/${user.username}`}>
          <CommentContainerUser>
            <CommentContainerAvatar src={`https://imager.habboon.pw/?figure=${user.look}&headonly=1`} style={{ background: user.rank.backgroundColor }} />
            <h2 className="notranslate">{user.username}</h2>
          </CommentContainerUser>
        </Link>
        <CommentContainerMessage>
          {comment}
        </CommentContainerMessage>
      </CommentContainerContent>
    </CommentContainerElement>
  )
}