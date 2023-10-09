import React from 'react';
import { GridLarge } from '../grid/Grid.remix';
import { ButtonBrand } from '../button/Button.remix';
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
          <div><img src="/img/credits.svg" loading="lazy" /> -</div>
          <div><img src="/img/diamonds.svg" loading="lazy" />  </div>
          <div><i className="fa fa-shopping-cart" style={{ marginRight: 8 }} />  </div>
        </div>
      </GridLarge>
      <br />
      <ButtonBrand disabled>
        <i className="fa fa-eye" style={{ marginRight: 8 }} />
        View More
      </ButtonBrand>
    </FurnitureValueGridContainerElement>
  )
}