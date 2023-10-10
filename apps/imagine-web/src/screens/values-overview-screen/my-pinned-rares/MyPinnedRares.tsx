import { Link } from 'wouter';
import { Card } from '../../../components/card/Card';
import React, { useEffect, useMemo, useState } from 'react';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { AddFurniturePin } from './add-furniture-pin/AddFurniturePin';
import { useUserPinnedFurnitureFetchMany } from '@imagine-cms/client';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { LoadingMessage } from '../../../components/loading-message/LoadingMessage';
import { FurnitureValueGridContainerLazy } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.lazy';

const FURNITURE_PAGE_SIZE = 3;

export function MyPinnedRares() {
  const [page, setPage] = useState(0);
  const fetchPinnedFurniture = useUserPinnedFurnitureFetchMany();

  const cardHeader = useMemo(() => (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
      <div>My pins</div>
      {page > 0 && <small>Page {page + 1}</small>}
    </div>
  ), [page]);

  const canGoUp = (fetchPinnedFurniture?.data?.length ?? 0) >= FURNITURE_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }

  const onFetchPinnedFurniture = () => {
    fetchPinnedFurniture.fetch({ skip: page * FURNITURE_PAGE_SIZE, limit: FURNITURE_PAGE_SIZE })
  }

  useEffect(() => {
    onFetchPinnedFurniture();
  }, [page]);

  return (
    <Card header={cardHeader} style={{ height: '100%' }}>
      <GridLarge>
        {
          fetchPinnedFurniture.loading && (
            <LoadingMessage>
              Loading furniture...
            </LoadingMessage>
          )
        }
        {
          fetchPinnedFurniture.data?.map(_ => (
            <Link key={`my_pins_${_.id}`} to={`/values/${_.id}`}>
              <FurnitureValueGridContainerLazy key={`my_pins_${_.id}`} furnitureID={_.furnitureID} />
            </Link>
          ))
        }
        <AddFurniturePin onPinAdded={onFetchPinnedFurniture} />
      </GridLarge>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchPinnedFurniture.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchPinnedFurniture.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}