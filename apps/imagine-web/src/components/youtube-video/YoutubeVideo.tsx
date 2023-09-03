import React from 'react';
import { YoutubeVideoProps } from './YoutubeVideo.types';
import { YoutubeVideoElement } from './YoutubeVideo.styled';

export function YoutubeVideo({ videoID, startAt = 0 }: YoutubeVideoProps) {
  return <YoutubeVideoElement width="100%" height={350} src={`https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1&start=${startAt}`} allow="autoplay; fullscreen" />
}
