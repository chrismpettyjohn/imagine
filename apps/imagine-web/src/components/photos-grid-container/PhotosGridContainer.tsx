import { Link } from 'wouter';
import { usePhotoFetchMany } from '@imagine-cms/client';
import React, { useEffect, useMemo, useState } from 'react';
import { PhotosGridContainerChild, PhotosGridContainerContent, PhotosGridContainerElement, PhotosGridContainerPagination } from './PhotosGridContainer.styled';

const PHOTOS_PER_PAGE = 8;

export function PhotosGridContainer() {
  const [page, setPage] = useState(0);
  const { data, fetch, loading } = usePhotoFetchMany();

  const canGoDown = page > 0;

  const onFetchPhotos = () => {
    console.log(page * PHOTOS_PER_PAGE)
    fetch({ skip: page * PHOTOS_PER_PAGE, limit: PHOTOS_PER_PAGE })
  }

  const onGoUpOnePage = () => {
    setPage(_ => _ + 1);
  }

  const onGoDownOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }

  useEffect(() => {
    onFetchPhotos();
  }, [page, loading]);

  const stories = useMemo(() => data ?? [], [data]);

  return (
    <PhotosGridContainerElement>
      <PhotosGridContainerPagination onClick={onGoDownOnePage} style={{ cursor: canGoDown ? 'pointer' : 'not-allowed' }}>
        {
          canGoDown && (
            <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          )
        }
      </PhotosGridContainerPagination>

      <PhotosGridContainerContent>
        {
          stories.map(_ => (
            <Link key={`photo_${_.id}`} to={`/photos/${_.id}`}>
              <PhotosGridContainerChild>
                <img src={_.photoURL} loading="lazy" />
              </PhotosGridContainerChild>
            </Link>
          ))
        }
      </PhotosGridContainerContent>
      <PhotosGridContainerPagination onClick={onGoUpOnePage}>
        <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
      </PhotosGridContainerPagination>
    </PhotosGridContainerElement>
  )
}