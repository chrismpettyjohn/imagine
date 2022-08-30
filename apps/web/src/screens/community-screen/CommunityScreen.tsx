import React from 'react';
import {LatestArticlesGrid} from '../../components/latest-articles-grid/LatestArticlesGrid';

export function CommunityScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row justify-content-center">
        <div className="col-lg-11 mb-4">
          <div className="w-full d-flex align-items-center justify-content-center flex-column rounded-lg py-4 px-4" style={{background: 'url(https://cdn.discordapp.com/attachments/361693054744133642/977198815209730119/unknown.png) no-repeat center center / cover', boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, .6)' }}>

            <h4 className="text-white mb-2">We're putting the weekly rare rotations in your hands!</h4>
            <p className="text-white mb-1">You can now vote for 5 items you'd like to see in the catalog for a week. <a
              href="https://www.habboon.pw/voting/rare-rotations" className="font-weight-bolder">Click here</a> to get
              involved.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12">
          <LatestArticlesGrid />
          <h5 className="silver">Latest Photos <span className="float-right"><i className="fas fa-camera"></i></span>
          </h5>
        </div>
        <div className="col-lg-3 col-12">
          <h5 className="silver">Latest Badges <span className="float-right"><i className="fas fa-badge"></i></span>
          </h5>
          <div id="sidebar-badges" className="card">
            <div className="card-body">
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Pink Hyacinth">
                <img src="https://assets.habboon.pw/c_images/album1584//PHCNH.gif" alt="PHCNH" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Lime Slurpee Machine">
                <img src="https://assets.habboon.pw/c_images/album1584//LMSLR.gif" alt="LMSLR" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Purple Laser Portal">
                <img src="https://assets.habboon.pw/c_images/album1584//PRPLS.gif" alt="PRPLS" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Chupa Chups Machine">
                <img src="https://assets.habboon.pw/c_images/album1584//CHUPA.gif" alt="CHUPA" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Pixel by Pixel Events!">
                <img src="https://assets.habboon.pw/c_images/album1584//PXPB3.gif" alt="PXPB3" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Pixel by Pixel Events!">
                <img src="https://assets.habboon.pw/c_images/album1584//PXPB2.gif" alt="PXPB2" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Pixel by Pixel Events!">
                <img src="https://assets.habboon.pw/c_images/album1584//PXPB1.gif" alt="PXPB1" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="SOTW 3rd place!">
                <img src="https://assets.habboon.pw/c_images/album1584//SOTWB3.gif" alt="SOTWB3" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="SOTW 2nd place!">
                <img src="https://assets.habboon.pw/c_images/album1584//SOTWS3.gif" alt="SOTWS3" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="SOTW 1st place!">
                <img src="https://assets.habboon.pw/c_images/album1584//SOTWG3.gif" alt="SOTWG3" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Petal Patch">
                <img src="https://assets.habboon.pw/c_images/album1584//PPTCH.gif" alt="PPTCH" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Mario Doll">
                <img src="https://assets.habboon.pw/c_images/album1584//3SMW22.gif" alt="3SMW22" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Golden Plasma Gate">
                <img src="https://assets.habboon.pw/c_images/album1584//GLDLS.gif" alt="GLDLS" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Emerald Dragon">
                <img src="https://assets.habboon.pw/c_images/album1584//EMDRG.gif" alt="EMDRG" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Giant Black Pillow!">
                <img src="https://assets.habboon.pw/c_images/album1584//BLKPL.gif" alt="BLKPL" />
              </a>
              <a href="#" className="badge-item" data-toggle="tooltip" data-placement="top" title=""
                 data-original-title="Toad Doll">
                <img src="https://assets.habboon.pw/c_images/album1584//3SMW21.gif" alt="3SMW21" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
