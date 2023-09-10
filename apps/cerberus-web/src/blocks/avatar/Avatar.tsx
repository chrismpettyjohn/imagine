import { AvatarProps } from './Avatar.types';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useMemo, useState } from 'react';

export function Avatar({ look, headOnly = false, size, direction, headDirection, gesture, ...props }: AvatarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { config } = useContext(configContext);
  const imageSrc = useMemo(() => {
    let baseImageSrc = `${config?.figureURL}?figure=${look}`;

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
