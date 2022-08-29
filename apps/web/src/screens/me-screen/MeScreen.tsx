import React from 'react';

export function MeScreen() {
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
          <div id="me" className="mb-3">
            <div className="row align-items-center">
              <div className="col-lg-2 col-3 text-center">
                <div className="avatar">
                  <img
                    src="https://imager.habboon.pw?figure=ea-1403-63.ch-3077-1325-110.hr-125-61.lg-285-89.fa-1201-0.sh-3027-110-1408.hd-3103-1.he-8394-110.wa-2009-1325&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;action=wav"
                    alt="Leader" loading="lazy" />
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 offset-lg-1 offset-xl-0 offset-0 col-9">
                <div className="row align-items-center details">
                  <div className="col-xl-6 col-lg-6 offset-lg-0 col-10">
                    <h4>Leader</h4>
                    <h6 className="mb-0">
                      [UPD] Officer I [HA]
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 text-right d-none d-lg-block">
                    <div className="d-flex  justify-content-between  w-100">
                      <div>
                        <a href="https://www.habboon.pw/client" target="_blank" className="btn btn-primary px-3" rel="noreferrer"><i
                          className="fas fa-sign-in-alt mr-1"></i> Enter (Flash)</a>
                      </div>
                      <div>
                        <a href="https://www.habboon.pw/nitro" target="_blank" className="btn btn-primary px-3" rel="noreferrer"><i
                          className="fas fa-sign-in-alt mr-1"></i> Enter (HTML5)</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="articles-carousel" className="carousel slide mb-3 mb-lg-0" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#articles-carousel" data-slide-to="0" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="1" className="active"></li>
              <li data-target="#articles-carousel" data-slide-to="2" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="3" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="4" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="5" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="6" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="7" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="8" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="9" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="10" className=""></li>
              <li data-target="#articles-carousel" data-slide-to="11" className=""></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item">
                <a href="https://www.habboon.pw/articles/4947-gamer-of-the-week-177">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/promo_hlmpc12.png"
                       alt="Gamer of the Week #177" loading="lazy"/>
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Gamer of the Week #177</h5>
                    <p className="mb-0">Now that's epic!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <a href="https://www.habboon.pw/articles/4945-guess-the-furni-52">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/GTF2020.png"
                       alt="Guess the Furni #52" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Guess the Furni #52</h5>
                    <p className="mb-0">Furni detectives wanted!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4943-outfit-of-the-week-104">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/OOTW2020.png"
                       alt="Guess the Furni #52" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Outfit of the Week #104</h5>
                    <p className="mb-0">May the best dressed win!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4941-room-of-the-week-176">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/rotw_2016.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Room Of The Week #176</h5>
                    <p className="mb-0">Boon's Best Builders!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4939-snapshot-of-the-week-86">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/sotw-2022.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Snapshot of the Week #86</h5>
                    <p className="mb-0">Calling the best photographers...<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4938-pixel-by-pixel-74">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/pixelbypixel.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Pixel by Pixel #74</h5>
                    <p className="mb-0">Get your groove on!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4935-betting-night-tournament">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/web_promo_party.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Betting Night Tournament</h5>
                    <p className="mb-0">Habboon's running it's first betting night tournament!</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4933-habboon-staff-applications">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/boon_staff.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Habboon Staff Applications</h5>
                    <p className="mb-0">Fancy joining our staff team?<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4931-guess-the-furni-51">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/GTF2020.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Guess the Furni #51</h5>
                    <p className="mb-0">Two large popcorns is £52 please...<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4929-what-the-friday-29">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/wtfridaynew.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>WTFriday #29</h5>
                    <p className="mb-0">Are you f%$!*&amp; serious?!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4928-kiss-and-tell-5">
                  <img className="d-block w-100"
                       src="https://www.habboon.pw/web-gallery/web_promos/kiss-and-tell-thumb.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Kiss and Tell #5</h5>
                    <p className="mb-0">Make it Sweet or Make it Wild!<br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <a href="https://www.habboon.pw/articles/4926-outfit-of-the-week-103">
                  <img className="d-block w-100" src="https://www.habboon.pw/web-gallery/web_promos/OOTW2020.png"
                       alt="Snapshot of the Week #86" loading="lazy" />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <div className="pl-4">
                    <h5>Outfit of the Week #103</h5>
                    <p className="mb-0">May the best dressed win!<br/><br/></p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#articles-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#articles-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div id="socials" className="mb-3">
            <a href="https://www.facebook.com/habboonltd/" target="_blank" className="facebook-banner" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> <span>Like us on Facebook!</span>
            </a>
            <a href="https://twitter.com/habboonpw" target="_blank" className="twitter-banner" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i> <span>Tweet us on Twitter!</span>
            </a>
            <a href="https://discord.gg/habboon" className="discord-banner">
              <i className="fab fa-discord"></i> <span>Join our Discord</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
