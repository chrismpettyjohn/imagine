import React from 'react';
import { GridLarge } from '../grid/Grid.remix';
import { FurnitureIcon } from '../furniture-icon/FurnitureIcon';
import { FurnitureValueGridContainerElement } from './FurnitureValueGridContainer.styled';

export function FurnitureValueGridContainerMock() {
  return (
    <FurnitureValueGridContainerElement>
      <h2>Name</h2>
      <p>-</p>
      <br />
      <GridLarge style={{ height: 150 }}>
        <FurnitureIcon />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div><img src="/img/credits.svg" loading="lazy" /> <i className="fa fa-spinner fa-spin" /></div>
          <div><img src="/img/diamonds.svg" loading="lazy" /> <i className="fa fa-spinner fa-spin" /> </div>
          <div><i className="fa fa-shopping-cart" style={{ marginRight: 8 }} />  <i className="fa fa-spinner fa-spin" /></div>
        </div>
      </GridLarge>
      <br />
    </FurnitureValueGridContainerElement>
  )
}