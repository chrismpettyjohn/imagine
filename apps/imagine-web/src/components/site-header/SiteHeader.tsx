import React, {useContext} from 'react';
import styled from 'styled-components';
import {configContext} from '@imagine-cms/web';

const SiteHeaderElement = styled.div`
  background: #282A34;
  height: 150px;
  width: 100%;
`

export function SiteHeader() {
  const {config} = useContext(configContext);

  return (
    <SiteHeaderElement>
      <img src={config!.logoURL} />
    </SiteHeaderElement>
  );
}
