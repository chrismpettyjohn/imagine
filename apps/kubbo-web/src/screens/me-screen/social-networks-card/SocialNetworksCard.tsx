import React from 'react';

export function SocialNetworksCard() {
  return (
    <div className="card bg-secondary" style={{ width: '100%', height: '100%' }}>
      <div className="card-header"><b>Join our social networks!</b></div>
      <div className="card-body">
        <p className="card-text">
          In our social networks you can find relevant information from communications about updates, events, contests, tournaments and much more!<br />
        </p><div className="text-center">
          <a href="https://www.facebook.com/Kubb0" target="_blank" className="mx-1" rel="noreferrer">
            <img src="img/icons/facebook.png" className="zoom" width="42px" height="auto" />
          </a>
          <a href="https://www.instagram.com/kubbocity/" target="_blank" className="mx-1" rel="noreferrer">
            <img src="img/icons/instagram.png" className="zoom" width="42px" height="auto" />
          </a>
          <a href="#" className="mx-1">
            <img src="img/icons/twitter.png" className="zoom" width="42px" height="auto" />
          </a>
          <br /> <br />
          <b>Partnered With</b><br />
          <a href="https://discord.gg/da66dPx2x5" target="_blank" className="mx-1" rel="noreferrer">
            <img src="img/icons/discord.png" className="zoom" width="42px" height="auto" />
          </a>
        </div>
        <p></p>
      </div>
    </div>
  )
}