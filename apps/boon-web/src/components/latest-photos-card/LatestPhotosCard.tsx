import DayJS from 'dayjs';
import Carousel from "react-multi-carousel";
import React, {useContext, useEffect} from 'react';
import {LoadingOverlay} from '../loading-overlay/LoadingOverlay';
import {configContext, useFetchLatestPhotos} from '@imagine-cms/web';

const PHOTOS_CAROUSEL_RESPONSE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}

export function LatestPhotosCard() {
  const {config} = useContext(configContext);
  const latestPhotos = useFetchLatestPhotos();

  useEffect(() => {
    latestPhotos.runQuery();
  }, []);

  return (
    <>
      <h5 className="silver">Latest Photos
        <span className="float-right">
          <i className="fas fa-camera" />
        </span>
      </h5>
      <div id="sidebar-badges" className="card">
        <div className="card-body">
          <LoadingOverlay loading={latestPhotos.loading}>
            {
              latestPhotos.data?.photos && (
                <Carousel responsive={PHOTOS_CAROUSEL_RESPONSE}>
                  {
                    latestPhotos.data.photos.map(photo => (
                      <div className="mr-2" key={`latest_article_${photo.id}`}>
                        <img
                          className="d-block w-100"
                          src={photo.photoURL}
                          alt={`Photo taken by ${photo.user?.username}`}
                        />
                        <div className="info blue">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="me">
                                <img src={`https://imager.habboon.pw?figure=${photo.user?.look}&direction=3&head_direction=3&gesture=sml&headonly=1`}/>
                              </div>
                            </div>
                            <div className="col-8">
                              <p><a href="#">{photo.user?.username}</a><br/><span style={{color: '#fff'}}>{DayJS.unix(photo.createdAt!).format(config!.dateFormat!)}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </Carousel>
              )
            }
          </LoadingOverlay>
        </div>
      </div>
    </>
  )
}
