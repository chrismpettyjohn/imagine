import React, { useState } from 'react';
import { FurnitureIconProps } from './FurnitureIcon.types';

const ICON_URL = 'https://swf.kubbo.city/dcr/hof_furni/icons';

const ICON_SUFFIX = '_icon.png'

const FALLBACK_IMAGE_URL = 'https://pbs.twimg.com/profile_images/3623084142/0ec240332aad4aa482534d083fa8a772_400x400.png';

export function FurnitureIcon({ furniture }: FurnitureIconProps) {
  const [source, setSource] = useState(`${ICON_URL}/${furniture?.itemName}${ICON_SUFFIX}`);

  console.log(source)

  const onUseFallbackImage = () => {
    setSource(FALLBACK_IMAGE_URL);
  }

  return <img src={source} width={80} style={{ objectFit: 'cover' }} loading="lazy" onError={onUseFallbackImage} />
}