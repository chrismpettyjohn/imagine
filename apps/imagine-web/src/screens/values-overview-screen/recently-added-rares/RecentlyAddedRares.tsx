import { FurnitureOrderBy, FurnitureValueType, useFurnitureFetchMany } from '@imagine-cms/client';
import React, { useEffect } from 'react';
import { LoadingMessage } from '../../../components/loading-message/LoadingMessage';
import { Link } from 'wouter';

export function RecentlyAddedRares() {
  const fetchFurniture = useFurnitureFetchMany();

  const onFetchFurniture = async () => {
    fetchFurniture.fetch({ orderBy: [FurnitureOrderBy.RECENTLY_ADDED], limit: 8, valueTypes: [FurnitureValueType.RARE, FurnitureValueType.EPIC, FurnitureValueType.LEGENDARY] });
  }

  useEffect(() => {
    onFetchFurniture();
  }, []);

  return (
    <div>
      <h2>Recently Added</h2>
      {
        fetchFurniture.loading && (
          <LoadingMessage>
            Loading furniture...
          </LoadingMessage>
        )
      }
      {
        fetchFurniture.data?.map(_ => (
          <Link key={`recently_added_${_.id}`} to={`/values/${_.id}`}>
            <div >
              {_.publicName}
              <br />
              {_.valueType}
            </div>
          </Link>
        ))
      }
    </div>
  )
}