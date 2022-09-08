import React from 'react';
import {LatestArticles} from '../../components/latest-articles/LatestArticles';

export function HomeScreen() {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <LatestArticles />
        </div>
      </div>
    </>
  )
}
