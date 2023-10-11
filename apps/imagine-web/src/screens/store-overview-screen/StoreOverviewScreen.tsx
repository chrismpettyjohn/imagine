import { Link } from 'wouter';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { Badge } from '../../components/badge/Badge';
import { GridLarge, GridLargeSmall } from '../../components/grid/Grid.remix';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { ButtonBrand, ButtonSuccess } from '../../components/button/Button.remix';

export function StoreOverviewScreen() {
  const { session } = useContext(sessionContext);
  return (
    <>
      <h1>Store</h1>
      <p>All proceeds will go to support the Kubbo Foundation.</p>
      <br />
      <GridLargeSmall>
        <div>
          <h2>Currency</h2>
          <GridLarge>
            <ButtonBrand>
              <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="/img/duckets.svg" loading="lazy" height={55} />
                <div>x10</div>
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
              </div>
            </ButtonBrand>
            <ButtonBrand>
              <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="/img/credits.svg" loading="lazy" height={55} />
                <div>x1,000</div>
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
              </div>
            </ButtonBrand>
            <ButtonBrand>
              <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="/img/diamonds.svg" loading="lazy" height={55} />
                <div>x10,000</div>
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
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
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
              </div>
            </ButtonBrand>
            <ButtonBrand>
              <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge badge={{ code: 'VIP' }} height={55} />
                <div>VIP Membership</div>
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
              </div>
            </ButtonBrand>
            <ButtonBrand>
              <div style={{ display: 'flex', width: '100%', fontSize: 28, justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge badge={{ code: 'MOD' }} height={55} />
                <div>Moderator</div>
                <Link to="/store/purchase/1">
                  <ButtonSuccess style={{ width: 200 }}>
                    <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Buy Now - $5
                  </ButtonSuccess>
                </Link>
              </div>
            </ButtonBrand>
          </GridLarge>
        </div>
        <div>
          <h2>My Stats</h2>
          {session && <UserStatsGrid user={session as any} />}
          {!session && <Link to="/login"><ButtonBrand>Login or create an account to see your stats</ButtonBrand></Link>}
        </div>
      </GridLargeSmall>
    </>
  )
}