import React from 'react';
import { Link } from 'wouter';
import { PhotoContainerProps } from './PhotoContainer.types';

export function PhotoContainer({ story, ...props }: PhotoContainerProps) {
  return (
    <Link to={`/photos/${story.id}`}>
      <img src={story.photoURL} loading="lazy" {...props} />
    </Link>

  )
} 