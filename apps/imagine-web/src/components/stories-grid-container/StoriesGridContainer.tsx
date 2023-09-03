import React, { useContext, useEffect } from 'react';
import { StoryContainer } from './story-container/StoryContainer';
import { StoriesGridContainerProps } from './StoriesGridContainer.types';
import { StoriesGridContainerContent, StoriesGridContainerElement } from './StoriesGridContainer.styled';
import { configContext, useFetchLatestPhotos } from '@imagine-cms/web';

export function StoriesGridContainer({ stories }: StoriesGridContainerProps) {
  const { config } = useContext(configContext);
  const latestPhotos = useFetchLatestPhotos(7);

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);

  return (
    <StoriesGridContainerElement>
      <StoriesGridContainerContent>
        {
          latestPhotos?.data?.photos?.map(_ => (
            <StoryContainer key={`photo_${_.id}`} story={_} />
          ))
        }
      </StoriesGridContainerContent>
    </StoriesGridContainerElement>
  )
}