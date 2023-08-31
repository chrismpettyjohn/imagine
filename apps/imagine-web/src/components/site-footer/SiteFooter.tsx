import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { SiteFooterElement } from './SiteFooter.styled';

export function SiteFooter() {
  const { config } = useContext(configContext);

  return (
    <SiteFooterElement>
      <h3>LeChris Lemade Lesite</h3>
    </SiteFooterElement>
  )
}
