import React, {useEffect} from 'react';
import {useFetchLatestPhotos} from '@imagine-cms/web';

export function LatestPhotos() {
  const latestPhotos = useFetchLatestPhotos(4);

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);

  return (
    <div className="row">
      {
        latestPhotos.data?.photos?.map(photo => (
          <div className="col col-md-3" key={`latest_photo_${photo.id}`}>
            <div className="photo-content">
              <div className="inner-photo" style={{backgroundImage: `url(${photo.photoURL})`, backgroundPosition: 'center center'}} />
            </div>
          </div>
        ))
      }
    </div>
  )
}
