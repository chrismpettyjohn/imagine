import React, { useEffect, useState } from 'react';
import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { useFurniturePurchaseLogOverviewLeastSells } from '@imagine-cms/client';
import { FurnitureValueGridContainerLazy } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.lazy';
import { FurnitureValueGridContainerMock } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.mock';

const FURNITURE_PAGE_SIZE = 4;

export function LeastSellingRares() {
  const [page, setPage] = useState(0);
  const fetchLeastSelling = useFurniturePurchaseLogOverviewLeastSells();

  const canGoUp = (fetchLeastSelling?.data?.length ?? 0) >= FURNITURE_PAGE_SIZE

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

  useEffect(() => {
    fetchLeastSelling.fetch({ skip: page * FURNITURE_PAGE_SIZE, limit: FURNITURE_PAGE_SIZE });
  }, [page]);

  return (
    <Card header="Least Selling">
      <Grid>
        {
          fetchLeastSelling.loading && (
            <>
              <FurnitureValueGridContainerMock />
              <FurnitureValueGridContainerMock />
              <FurnitureValueGridContainerMock />
              <FurnitureValueGridContainerMock />
            </>
          )
        }
        {
          fetchLeastSelling.data?.map(_ => (
            <FurnitureValueGridContainerLazy key={`least_selling_furni_${_.furnitureID}`} furnitureID={_.furnitureID} />
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchLeastSelling.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchLeastSelling.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}