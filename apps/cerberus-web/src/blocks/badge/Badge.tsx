import { BadgeProps } from './Badge.types';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useEffect, useMemo, useState } from 'react';

export function Badge({ badge, overrideBadgeURL, overrideBadgeEXT, ...props }: BadgeProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { config } = useContext(configContext);
  const badgeURL = overrideBadgeURL ?? config?.badgeURL;
  const badgeEXT = overrideBadgeEXT ?? config?.badgeEXT;

  const imageSrc = useMemo(() => {
    return `${badgeURL}/${badge.code}.${badgeEXT}`
  }, [badgeURL, badgeEXT, badge.code]);

  useEffect(() => {
    setIsHidden(false);
  }, [badgeURL, badgeEXT, badge.code]);

  if (isHidden) {
    return null;
  }

  return (
    <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" height={50} />
  )
}