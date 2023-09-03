import React from 'react';
import { Link } from 'wouter';
import { PhotoContainerProps } from './PhotoContainer.types';
import { PhotoContainerElement } from './PhotoContainer.styled';

export function PhotoContainer({ story }: PhotoContainerProps) {
  return (
    <Link to={`/photos/${story.id}`}>
      <PhotoContainerElement>
        <img src={story.photoURL} />
      </PhotoContainerElement>
    </Link>

  )
} 