import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { useUserPinnedFurnitureFetchMany } from '@imagine-cms/client';
import { LoadingMessage } from '../../../components/loading-message/LoadingMessage';
import { ButtonNoBorder } from '../../../components/button/Button.remix';

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
            <div >
              {_.furnitureID}
            </div>
          </Link>
        ))
      }
      <ButtonNoBorder>
        <i className="fa fa-plus" />
      </ButtonNoBorder>
    </>
  )
}