import React from 'react';
import { Link, useRoute } from 'wouter';

export function StorePurchaseScreen() {
  const [, params] = useRoute<{ itemID: string }>('/store/purchase/:itemID');
  const itemID = Number(params!.itemID);

  return (
    <>
      <h1><Link to="/store"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Store - Confirm Purchase</h1>
      <p>{itemID}</p>
    </>
  )
}