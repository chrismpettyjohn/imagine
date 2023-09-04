import React, { useContext, useMemo } from 'react';
import { BadgeProps } from './Badge.types';
import { configContext } from '@imagine-cms/web';

export function Badge({ badge, ...props }: BadgeProps) {
  const { config } = useContext(configContext);
  const imageSrc = useMemo(() => {
    return `${config?.badgeURL}/${badge.code}.${config?.badgeEXT}`
  }, [config?.badgeURL, config?.badgeEXT, badge.code]);

  return (
    <img src={imageSrc} {...props} />
  )
}