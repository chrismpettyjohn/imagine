import React from 'react';
import { Link, useRoute } from 'wouter';

export function ValuesViewItemScreen() {
  const [, params] = useRoute<{ furnitureID: string }>('/values/:furnitureID');
  const furnitureID = Number(params!.furnitureID);
  return (
    <>
      <h1><Link to="/values"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Rare Values</h1>
      <p>{furnitureID}</p>
    </>
  )
}