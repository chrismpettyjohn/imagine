import React from 'react';
import { Link } from 'wouter';
import { StoryContainerProps } from './StoryContainer.types';
import { StoryContainerElement } from './StoryContainer.styled';

export function StoryContainer({ story }: StoryContainerProps) {
  return (
    <Link to={`/profiles/${story.user!.username}/photos/${story.id}`}>
      <StoryContainerElement>
        <img src={story.photoURL} />
      </StoryContainerElement>
    </Link>

  )
} 