import React from 'react';
import { StoryContainerProps } from './StoryContainer.types';
import { StoryContainerElement } from './StoryContainer.styled';

export function StoryContainer({ story }: StoryContainerProps) {
  return (
    <StoryContainerElement>
      <img src="https://habbox.fr/nitro/camera/30332_1693197940.png" />
    </StoryContainerElement>
  )
}