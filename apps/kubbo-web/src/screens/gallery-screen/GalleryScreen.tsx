import DayJS from 'dayjs';
import React, {useContext, useEffect} from 'react';
import {configContext, useFetchLatestPhotos} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function GalleryScreen() {
  const {config} = useContext(configContext);
  const latestPhotos = useFetchLatestPhotos();

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);
  return (
    (
      <main className="position-relative container justify-content-center py-4">
        <div className="row align-items-center  justify-content-center  mb-3" id="gallery-header">
          <div className=" col-lg-12  col-12 d-none d-lg-block">
            <div className="banner">
              <h4>Photo Gallery</h4>
            </div>
          </div>
        </div>
        <LoadingOverlay loading={latestPhotos.loading}>
          <div className="row" id="photos">
            {
              latestPhotos.data?.photos?.map(photo => (
                <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={`photo_gallery_${photo.id}`}>
                  <div className="card photo">
                    <div className="card-body p-0">
                      <div className="image" id="photo-393790" style={{backgroundImage: 'url(https://static.habboon.pw/camera/42c81fb6-59bf-427f-8518-cfe98833451f-1054522.jpeg)', width: '100%', borderRadius: '5px 5px 0 0'}} />
                    </div>
                    <div className="card-footer  dark-blue " style={{padding: '1.5rem'}}>
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="me">
                            <img
                              src={`https://imager.habboon.pw?figure=${photo.user?.look}&direction=3&head_direction=3&gesture=sml&headonly=1`}
                              alt="Niica" loading="lazy" />
                          </div>
                        </div>
                        <div className="col-9">
                          <p><a href="#">{photo?.user?.username}</a><br /><span style={{color: '#fff'}}>{DayJS.unix(photo.createdAt!).format(config!.dateFormat)}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </LoadingOverlay>
      </main>
    )
  )
}
