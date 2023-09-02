import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { SiteFooterElement } from './SiteFooter.styled';

export function SiteFooter() {
  const { config } = useContext(configContext);

  return (
    <SiteFooterElement>
      <h2 style={{ letterSpacing: 1.6, margin: 0 }}>imagine</h2>
      <h4 style={{ margin: 0 }}>LeChris</h4>
    </SiteFooterElement>
  )
}
