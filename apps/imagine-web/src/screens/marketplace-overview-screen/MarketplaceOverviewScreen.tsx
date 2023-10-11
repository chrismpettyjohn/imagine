import React from 'react';
import { Link } from 'wouter';
import { ButtonBrand } from '../../components/button/Button.remix';

export function MarketplaceOverviewScreen() {
  return (
    <>
      <div style={{ alignItems: 'center', display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <h1>Marketplace</h1>
        <Link to="/values">
          <ButtonBrand style={{ height: 'fit-content' }}>
            <i className="fa fa-analytics" style={{ marginRight: 8 }} /> Rare Values
          </ButtonBrand>
        </Link>
      </div>
    </>
  )
}