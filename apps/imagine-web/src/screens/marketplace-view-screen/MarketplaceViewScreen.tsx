import React from 'react';
import { Link, useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonNoBorder, ButtonSuccess } from '../../components/button/Button.remix';

export function MarketplaceViewScreen() {
  const [, params] = useRoute<{ listingID: string }>('/marketplace/:listingID');
  const listingID = Number(params!.listingID);

  return (
    <>
      <h1><Link to="/marketplace"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Marketplace - #{listingID}</h1>
      <GridLarge>
        <div>
          <Card header="About">
            coming soon
          </Card>
          <h2>Listed By</h2>
        </div>
        <div>
          <Card header="Tools">
            <GridLarge>
              <ButtonNoBorder>
                Make Offer
              </ButtonNoBorder>
              <ButtonSuccess>
                Buy Now (<b>500</b>)
              </ButtonSuccess>
            </GridLarge>
          </Card>
          <Card header="Offers">
            Coming soon
          </Card>
        </div>
      </GridLarge>
    </>
  )
}