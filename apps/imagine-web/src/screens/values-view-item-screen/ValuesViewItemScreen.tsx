import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { useFurnitureFetchOne } from '@imagine-cms/client';
import { GridLarge } from '../../components/grid/Grid.remix';
import { UsersWithFurniCard } from './users-with-furni-card/UsersWithFurniCard';
import { SearchRares } from '../values-overview-screen/search-rares/SearchRares';
import { FurnitureCommentListCard } from './furniture-comment-list-card/FurnitureCommentListCard';
import { FurniturePriceTrendsCard } from './furniture-price-trends-card/FurniturePriceTrendsCard';
import { FurniturePurchaseTrendsCard } from './furniture-purchase-trends-card/FurniturePurchaseTrendsCard';
import { FurnitureValueGridContainer } from '../../components/furniture-value-grid-container/FurnitureValueGridContainer';
import { FurnitureValueGridContainerMock } from '../../components/furniture-value-grid-container/FurnitureValueGridContainer.mock';
import { Card } from '../../components/card/Card';

export function ValuesViewItemScreen() {
  const [, params] = useRoute<{ furnitureID: string }>('/values/:furnitureID');
  const fetchFurniture = useFurnitureFetchOne();
  const furnitureID = Number(params!.furnitureID);

  useEffect(() => {
    fetchFurniture.fetch({ id: furnitureID })
  }, [furnitureID]);

  return (
    <>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>

        <h1><Link to="/values"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Rare Values - {fetchFurniture.data?.publicName ?? <>#{furnitureID}</>}</h1>
        <SearchRares />
      </div>
      <br />
      <GridLarge>
        {fetchFurniture.data ? <FurnitureValueGridContainer furniture={fetchFurniture.data} /> : <FurnitureValueGridContainerMock />}
        <FurnitureCommentListCard />
      </GridLarge>
      <br />
      <UsersWithFurniCard furnitureID={furnitureID} />
      <br />
      <Card header="Marketplace Listings">
        Coming soon
      </Card>
      <br />
      <GridLarge>
        <FurniturePriceTrendsCard />
        <FurniturePurchaseTrendsCard />
      </GridLarge>
    </>
  )
}