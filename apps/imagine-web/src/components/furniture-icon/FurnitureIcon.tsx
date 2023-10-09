import React, { useState } from 'react';
import { FurnitureIconProps } from './FurnitureIcon.types';

const ICON_URL = 'https://swf.kubbo.city/dcr/hof_furni/icons';

const ICON_SUFFIX = '_icon.png'

const FALLBACK_IMAGE_NAME = 'dng_throne';

export function FurnitureIcon({ furniture }: FurnitureIconProps) {
  const [source, setSource] = useState(`${ICON_URL}/${furniture?.itemName}${ICON_SUFFIX}`);

  console.log(source)

  const onUseFallbackImage = () => {
    setSource(`${ICON_URL}/${FALLBACK_IMAGE_NAME}${ICON_SUFFIX}`)
  }

  return <img src={source} width={80} style={{ objectFit: 'cover' }} loading="lazy" onError={onUseFallbackImage} />
}