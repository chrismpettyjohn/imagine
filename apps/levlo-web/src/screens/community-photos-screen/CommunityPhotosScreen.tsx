import React, {useContext, useEffect} from 'react';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {configContext, useFetchLatestPhotos} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function CommunityPhotosScreen() {
  const {config} = useContext(configContext);
  const latestPhotos = useFetchLatestPhotos();

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);
  return (
    <UserLayout>
      <div className="container">
        <LoadingOverlay loading={latestPhotos.loading}>
          <div className="row">
            {
              latestPhotos?.data?.photos?.map(photo => (
                <div className="col-3" key={`photo_${photo.id}`}>
                  <div className="photos" style={{backgroundImage: `url(${photo.photoURL}`}}>
                    <div className="overlay">
                      <div className="avatar-head" style={{backgroundImage: `url(https://imager.habboon.pw/?figure=${photo?.user?.look}&headonly=1`}} />
                      <div className="username">{photo?.user?.username}</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </LoadingOverlay>
      </div>
    </UserLayout>

  )
}
