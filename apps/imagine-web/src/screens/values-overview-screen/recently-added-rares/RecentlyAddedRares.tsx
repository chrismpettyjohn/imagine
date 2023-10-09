import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import React, { useEffect, useMemo, useState } from 'react';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { LoadingMessage } from '../../../components/loading-message/LoadingMessage';
import { FurnitureOrderBy, FurnitureValueType, useFurnitureFetchMany } from '@imagine-cms/client';
import { FurnitureValueGridContainer } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer';

const FURNITURE_PAGE_SIZE = 4;

export function RecentlyAddedRares() {
  const [page, setPage] = useState(0);
  const fetchFurniture = useFurnitureFetchMany();

  const cardHeader = useMemo(() => (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
      <div>Recently added</div>
      {page > 0 && <small>Page {page + 1}</small>}
    </div>
  ), [page]);

  const canGoUp = (fetchFurniture?.data?.length ?? 0) >= FURNITURE_PAGE_SIZE

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

  const onFetchFurniture = async () => {
    fetchFurniture.fetch({ orderBy: [FurnitureOrderBy.RECENTLY_ADDED], skip: page * FURNITURE_PAGE_SIZE, limit: FURNITURE_PAGE_SIZE, valueTypes: [FurnitureValueType.RARE, FurnitureValueType.EPIC, FurnitureValueType.LEGENDARY] });
  }

  useEffect(() => {
    onFetchFurniture();
  }, [page]);

  return (
    <Card header={cardHeader}>
      <Grid>
        {
          fetchFurniture.loading && (
            <LoadingMessage>
              Loading furniture...
            </LoadingMessage>
          )
        }
        {
          fetchFurniture.data?.map(_ => (
            <FurnitureValueGridContainer key={`recently_added_${_.id}`} furniture={_} />
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchFurniture.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchFurniture.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card >
  )
}