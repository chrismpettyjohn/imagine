import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';

export function SocialMediaIcons() {
  const {config} = useContext(configContext);
  return (
    <ul className="social">
      {
        config?.facebookURL && (
          <li>
            <a href={config?.facebookURL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
        )
      }
      {
        config?.instagramURL && (
          <li>
            <a href={config?.instagramURL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
        )
      }
      {
        config?.twitterURL && (
          <li>
            <a href={config?.twitterURL} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
        )
      }
      {
        config?.discordURL && (
          <li>
            <a href={config?.discordURL} target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <i className="fab fa-discord" />
            </a>
          </li>
        )
      }
      {
        config?.snapchatURL && (
          <li>
            <a href={config?.snapchatURL} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
              <i className="fab fa-snapchat-ghost" />
            </a>
          </li>
        )
      }
    </ul>
  )
}
