import React from 'react';
import { Link } from 'wouter';
import { PhotosGridContainerProps } from './PhotosGridContainer.types';
import { PhotosGridContainerChild, PhotosGridContainerContent, PhotosGridContainerElement, PhotosGridContainerPagination } from './PhotosGridContainer.styled';

export function PhotosGridContainer({ photos: stories }: PhotosGridContainerProps) {
  return (
    <PhotosGridContainerElement>
      <PhotosGridContainerPagination>
        <i className="fa fa-arrow-left" />
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
      <PhotosGridContainerPagination>
        <i className="fa fa-arrow-right" />
      </PhotosGridContainerPagination>
    </PhotosGridContainerElement>
  )
}