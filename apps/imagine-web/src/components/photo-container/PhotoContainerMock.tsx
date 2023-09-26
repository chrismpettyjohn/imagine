import React from 'react';
import { PhotoContainerElement } from './PhotoContainer.styled';
import { PhotoContainerProps } from './PhotoContainer.types';

export function PhotoContainerMock({ ...props }: Omit<PhotoContainerProps, 'story'>) {
  return (
    <PhotoContainerElement>
      <div className="mock" {...props as any} />
    </PhotoContainerElement>
  )
}