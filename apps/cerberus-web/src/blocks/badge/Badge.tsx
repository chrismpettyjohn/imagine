import { BadgeProps } from './Badge.types';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useMemo } from 'react';

export function Badge({ badge, overrideBadgeURL, overrideBadgeEXT, ...props }: BadgeProps) {
  const { config } = useContext(configContext);
  const badgeURL = overrideBadgeURL ?? config?.badgeURL;
  const badgeEXT = overrideBadgeEXT ?? config?.badgeEXT;
  const imageSrc = useMemo(() => {
    return `${badgeURL}/${badge.code}.${badgeEXT}`
  }, [badgeURL, badgeEXT, badge.code]);

  return (
    <img src={imageSrc} {...props} loading="lazy" height={50} />
  )
}