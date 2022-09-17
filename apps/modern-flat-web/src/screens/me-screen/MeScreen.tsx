import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {LatestArticlesSlider} from './latest-articles-slider/LatestArticlesSlider';

export function MeScreen() {
  const {config} = useContext(configContext);
  return (
    <UserLayout>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <LatestArticlesSlider />
          </div>
          <div className="col-4">
            {
              config?.discordWidget && (
                <div dangerouslySetInnerHTML={{ __html: config.discordWidget }} />
              )
            }
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
