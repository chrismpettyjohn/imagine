import React, {useContext} from 'react';
import {configContext} from '../../context/config/ConfigContext';

export function SocialMediaButtons() {
  const {config} = useContext(configContext);
  return (
    <div id="socials" className="mb-3">
      {
        config?.facebookURL && (
          <a href={config.facebookURL} target="_blank" className="facebook-banner" rel="noopener noreferrer">
            <i className="fab fa-facebook" /> <span>Like us on Facebook!</span>
          </a>
        )
      }
      {
        config?.instagramURL && (
          <a href={config.instagramURL} target="_blank" className="facebook-banner" style={{background: '#405DE6'}} rel="noopener noreferrer">
            <i className="fab fa-instagram" /> <span>Like us on Instagram!</span>
          </a>
        )
      }
      {
        config?.twitterURL && (
          <a href={config.twitterURL} target="_blank" className="twitter-banner" rel="noopener noreferrer">
            <i className="fab fa-twitter-square" /> <span>Tweet us on Twitter!</span>
          </a>
        )
      }
      {
        config?.discordURL && (
          <a href={config.discordURL} target="_blank" className="discord-banner" rel="noopener noreferrer">
            <i className="fab fa-discord" /> <span>Join our Discord</span>
          </a>
        )
      }
      {
        config?.snapchatURL && (
          <a href={config.snapchatURL} target="_blank" className="facebook-banner" style={{background: '#000000'}} rel="noopener noreferrer">
            <i className="fab fa-snapchat-ghost" /> <span>Subscribe on Snapchat</span>
          </a>
        )
      }
    </div>
  )
}
