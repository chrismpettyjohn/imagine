import React from 'react';
import { Card } from '../../components/card/Card';
import { GoogleAccountCard } from './google-account-card/GoogleAccountCard';
import { ChangePasswordForm } from './change-password-form/ChangePasswordForm';
import { DiscordAccountCard } from './discord-account-card/DiscordAccountCard';
import { FacebookAccountCard } from './facebook-account-card/FacebookAccountCard';
import { ChangeEmailAddressForm } from './change-email-address-form/ChangeEmailAddressForm';

export function SettingsScreen() {
  return (
    <>
      <h1>Settings</h1>
      <br />
      <Card header="Security">
        <ChangeEmailAddressForm />
        <ChangePasswordForm />
      </Card>
      <br />
      <Card header="Connected Accounts">
        <div style={{ display: 'flex', gap: 16 }}>
          <DiscordAccountCard />
          <FacebookAccountCard />
          <GoogleAccountCard />
        </div>
      </Card>
    </>
  )
}