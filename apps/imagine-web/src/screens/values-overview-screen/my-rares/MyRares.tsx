import { Link } from 'wouter';
import { sessionContext } from '@imagine-cms/web';
import { Card } from '../../../components/card/Card';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { useUserFurnitureFetchMany } from '@imagine-cms/client';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ButtonBrand, ButtonNoBorder } from '../../../components/button/Button.remix';
import { FurnitureValueGridContainerMock } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.mock';
import { FurnitureValueGridContainerLazy } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.lazy';

const FURNITURE_PAGE_SIZE = 4;

export function MyRares() {
  const [page, setPage] = useState(0);
  const { session } = useContext(sessionContext);
  const fetchFurni = useUserFurnitureFetchMany();

  console.log(fetchFurni.data, fetchFurni.error)

  const cardHeader = useMemo(() => {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div>My rares</div>
        {
          page > 0 && (
            <small>Page {page + 1}</small>
          )
        }
      </div>
    )
  }, [page]);

  const canGoUp = (fetchFurni?.data?.length ?? 0) >= FURNITURE_PAGE_SIZE

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
    if (!session?.id) {
      return;
    }
    fetchFurni.fetch({ skip: page * FURNITURE_PAGE_SIZE, limit: FURNITURE_PAGE_SIZE, userIDs: [session.id] })
  }, [session?.id, page]);

  return (
    <Card header={cardHeader} style={{ height: '100%' }}>
      {
        session && (
          <>
            <GridLarge>
              {
                fetchFurni.loading && (
                  <>
                    <FurnitureValueGridContainerMock />
                    <FurnitureValueGridContainerMock />
                    <FurnitureValueGridContainerMock />
                    <FurnitureValueGridContainerMock />
                  </>
                )
              }
              {
                fetchFurni.data?.length === 0 && (
                  <p>No results to display</p>
                )
              }
              {
                fetchFurni.data?.map(_ => (
                  <FurnitureValueGridContainerLazy key={`user_rare_${session.id}_${_.id}`} furnitureID={_.itemID} />
                ))
              }
            </GridLarge>
            <GridLarge>
              {canGoDown ?
                <ButtonNoBorder onClick={goBackOnePage}>
                  <i className={fetchFurni.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
                </ButtonNoBorder>
                : <div />}
              {
                canGoUp && (
                  <ButtonNoBorder onClick={goUpOnePage}>
                    <i className={fetchFurni.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
                  </ButtonNoBorder>
                )
              }
            </GridLarge>
          </>
        )
      }
      {!session && <Link to="/login"><ButtonBrand>Login or create an account to see your rares</ButtonBrand></Link>}
    </Card>
  )
}