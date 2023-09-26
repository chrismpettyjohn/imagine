import React, { useEffect } from 'react';
import { usePhotoFetchMany } from '@imagine-cms/client';
import { PhotoContainer } from '../../components/photo-container/PhotoContainer';
import { PhotoContainerMock } from '../../components/photo-container/PhotoContainerMock';

export function PhotoListScreen() {
  const { data, fetch, loading } = usePhotoFetchMany();

  useEffect(() => {
    fetch({ limit: 25 });
  }, []);

  return (
    <>
      <h1>{loading && <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />}Photos</h1>
      <br />
      <div style={{ display: 'flex', flex: 1, flexBasis: '100%', flexWrap: 'wrap', gap: 16, width: '100%' }}>
        {
          loading && (
            <>
              <PhotoContainerMock style={{ height: 250, width: 250 }} />
              <PhotoContainerMock style={{ height: 250, width: 250 }} />
              <PhotoContainerMock style={{ height: 250, width: 250 }} />
              <PhotoContainerMock style={{ height: 250, width: 250 }} />
              <PhotoContainerMock style={{ height: 250, width: 250 }} />
            </>
          )
        }
        {
          data?.map(_ => (
            <PhotoContainer key={`photo_${_.id}`} story={_} style={{ height: 250, width: 250 }} />
          ))
        }
      </div>
    </>
  )
}