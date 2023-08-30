import React from 'react';
import { StoriesCardProps } from './StoriesCard.types';
import { StoriesCardContainer } from './StoriesCard.styled';
import { StoryContainer } from './story-container/StoryContainer';

export function StoriesCard({ stories }: StoriesCardProps) {
  return (
    <StoriesCardContainer>
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
    </StoriesCardContainer>
  )
}