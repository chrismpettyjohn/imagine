import { BadgeProps } from './Badge.types';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useMemo, useState } from 'react';

export function Badge({ badge, ...props }: BadgeProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { config } = useContext(configContext);
  const imageSrc = useMemo(() => {
    return `${config?.badgeURL}/${badge.code}.${config?.badgeEXT}`
  }, [config?.badgeURL, config?.badgeEXT, badge.code]);

  if (isHidden) {
    return null;
  }

  return (
    <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" />
  )
}