import React from 'react';
import { StoriesGridContainerProps } from './StoriesGridContainer.types';
import { StoriesGridContainerContent, StoriesGridContainerElement } from './StoriesGridContainer.styled';
import { StoryContainer } from './story-container/StoryContainer';

export function StoriesGridContainer({ stories }: StoriesGridContainerProps) {
  return (
    <StoriesGridContainerElement>
      <StoriesGridContainerContent>
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
        <StoryContainer story={{} as any} />
      </StoriesGridContainerContent>
    </StoriesGridContainerElement>
  )
}