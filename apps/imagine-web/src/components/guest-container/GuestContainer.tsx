import React from 'react';
import { Link } from 'wouter';
import { Grid } from '../grid/Grid';
import { GuestGuard } from '@imagine-cms/web';
import { ButtonBrand } from '../button/Button.remix';
import { GuestContainerProps } from './GuestContainer.types';
import { GuestContainerElement } from './GuestContainer.styled';
import { GoogleLoginButton } from '../google-login-button/GoogleLoginButton';
import { DiscordLoginButton } from '../discord-login-button/DiscordLoginButton';
import { FacebookLoginButton } from '../facebook-login-button/FacebookLoginButton';
import { GridLarge } from '../grid/Grid.remix';
import { LatestArticlesGrid } from '../latest-articles-grid/LatestArticlesGrid';

export function GuestContainer({ children }: GuestContainerProps) {
  return (
    <GuestGuard redirect>
      <GuestContainerElement>
        <GridLarge>
          <div>

            {children}
          </div>
          <div>
            <img className="guest-pic" src="/img/user-header.png" width="100%" loading="lazy" />
          </div>
        </GridLarge>
      </GuestContainerElement>
      <br />
      <h1>other ways to login</h1>
      <Grid style={{ marginTop: 8 }}>
        <FacebookLoginButton />
        <DiscordLoginButton />
        <GoogleLoginButton />
        <Link to="/login/device">
          <ButtonBrand>
            <i className="fa fa-phone" /> Device
          </ButtonBrand>
        </Link>
      </Grid>
      <br />
      <LatestArticlesGrid showHeader={false} />
    </GuestGuard>
  )
}