import { configContext } from '@imagine-cms/web';
import { GroupBadgeProps } from './GroupBadge.types';
import React, { useContext, useMemo, useState } from 'react';

export function GroupBadge({ group, ...props }: GroupBadgeProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { config } = useContext(configContext);
  const imageSrc = useMemo(() => {
    return `${config?.groupBadgeURL}/${group.badge}.png`
  }, [config?.groupBadgeURL, group.badge]);

  if (isHidden) {
    return null;
  }

  return (
    <img src={imageSrc} {...props} onError={() => setIsHidden(true)} loading="lazy" />
  )
}