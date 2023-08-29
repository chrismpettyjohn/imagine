import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { useFetchLatestPhotos } from '@imagine-cms/web';
import { LoadingOverlay } from 'components/loading-overlay/LoadingOverlay';

export function LatestPhotosGrid() {
  const latestPhotos = useFetchLatestPhotos();

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);

  return (
    <LoadingOverlay loading={latestPhotos.loading}>
      <div className="row">
        {
          latestPhotos.data?.photos?.map(photo => (
            <div className="col-xl-4 col-md-6 col-12" key={`photo_${photo.id}`}>
              <div className="card border-dark text-white zoom-picture mb-3" style={{ background: `url(${photo.photoURL}) no-repeat center`, backgroundSize: 'cover', height: 240 }}>
                <div className="card-body card-community" style={{ backgroundImage: `url(https://nitro-imager.kubbo.ch/?figure=${photo.user!.look}&amp;gesture=sml&amp;action=wav)` }}>
                  <span className="text-white" style={{ marginLeft: 40, fontWeight: 700, fontSize: 14 }}>
                    <Link to={`/profile/${photo.user!.username}`} className="text-white">
                      {photo.user!.username}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </LoadingOverlay >
  )
}