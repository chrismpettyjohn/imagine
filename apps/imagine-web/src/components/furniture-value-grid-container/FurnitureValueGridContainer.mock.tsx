import React from 'react';
import { FurnitureValueGridContainerElement } from './FurnitureValueGridContainer.styled';

export function FurnitureValueGridContainerMock() {
  return (
    <FurnitureValueGridContainerElement>
      <h2>Name</h2>
      -
      <h2>Average Cost Credits</h2>
      <div> <i className="fa fa-spinner fa-spin" /></div>
      <h2>Average Cost Points</h2>
      <div> <i className="fa fa-spinner fa-spin" /></div>
    </FurnitureValueGridContainerElement>
  )
}