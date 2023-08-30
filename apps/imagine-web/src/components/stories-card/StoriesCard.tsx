import React from 'react';
import { StoriesCardProps } from './StoriesCard.types';
import { StoriesCardElement } from './StoriesCard.styled';
import { StoryContainer } from './story-container/StoryContainer';

export function StoriesCard({ stories }: StoriesCardProps) {
  return (
    <StoriesCardElement>
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
      <StoryContainer story={{} as any} />
    </StoriesCardElement>
  )
}