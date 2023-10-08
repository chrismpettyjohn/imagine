import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { Grid } from '../../../components/grid/Grid';
import { useUserPinnedFurnitureFetchMany } from '@imagine-cms/client';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { LoadingMessage } from '../../../components/loading-message/LoadingMessage';
import { FurnitureValueGridContainerLazy } from '../../../components/furniture-value-grid-container/FurnitureValueGridContainer.lazy';

export function MyPinnedRares() {
  const fetchPinnedFurniture = useUserPinnedFurnitureFetchMany();

  const onFetchPinnedFurniture = () => {
    fetchPinnedFurniture.fetch({})
  }

  useEffect(() => {
    onFetchPinnedFurniture();
  }, []);

  return (
    <>
      <h2>My Pins</h2>
      <Grid>
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
        <ButtonNoBorder>
          <i className="fa fa-plus" />
        </ButtonNoBorder>
      </Grid>
    </>
  )
}