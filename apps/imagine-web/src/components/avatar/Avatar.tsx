import { AvatarProps } from './Avatar.types';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useMemo, useState } from 'react';

export function Avatar({ look, action, headOnly = false, size, direction, headDirection, gesture, overrideImgSrc, ...props }: AvatarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { config } = useContext(configContext);
  const imageSrc = useMemo(() => {
    let baseImageSrc = `${overrideImgSrc ?? config?.figureURL}?figure=${look}`;

    if (headOnly) {
      baseImageSrc += `&headonly=1`
    }

    if (size) {
      baseImageSrc += `&size=${size}`
    }

    if (direction) {
      baseImageSrc += `&direction=${direction}`
    }

    if (headDirection) {
      baseImageSrc += `&head_direction=${headDirection}`
    }

    if (action) {
      baseImageSrc += `&action=${action}`
    }

    if (gesture) {
      baseImageSrc += `&gesture=${gesture}`
    }

    return baseImageSrc
  }, [config?.figureURL]);

  if (isHidden) {
    return null;
  }
  return <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" />
}
