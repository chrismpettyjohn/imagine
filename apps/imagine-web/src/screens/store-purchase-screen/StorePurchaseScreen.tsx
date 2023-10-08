import React from 'react';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonBrand, ButtonNoBorder } from '../../components/button/Button.remix';
import { Badge } from '../../components/badge/Badge';

export function StorePurchaseScreen() {
  return (
    <>
      <h1>Store</h1>
      <p>All proceeds will go to support the Kubbo Foundation.</p>
      <br />
      <h2>Currency</h2>
      <GridLarge>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/img/duckets.svg" loading="lazy" height={55} />
            <div>x10</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/img/credits.svg" loading="lazy" height={55} />
            <div>x1,000</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/img/diamonds.svg" loading="lazy" height={55} />
            <div>x10,000</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
      </GridLarge>
      <br />
      <h2>Subscriptions</h2>
      <GridLarge>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge badge={{ code: 'FAN' }} height={55} />
            <div>Gold User</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge badge={{ code: 'VIP' }} height={55} />
            <div>VIP Membership</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $50
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
        <ButtonBrand>
          <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge badge={{ code: 'MOD' }} height={55} />
            <div>Moderator</div>
            <ButtonNoBorder style={{ width: 200 }}>
              <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $500
            </ButtonNoBorder>
          </div>
        </ButtonBrand>
      </GridLarge>
    </>
  )
}