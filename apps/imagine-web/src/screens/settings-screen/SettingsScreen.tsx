import React from 'react';
import { Card } from '../../components/card/Card';
import { SwitchProfileCard } from './switch-profile-card/SwitchProfileCard';
import { ChangePasswordForm } from './change-password-form/ChangePasswordForm';
import { ChangeEmailAddressForm } from './change-email-address-form/ChangeEmailAddressForm';
import { ManageConnectedAccountsCard } from './manage-connected-accounts-card/ManageConnectedAccountsCard';

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
      <ManageConnectedAccountsCard />
      <br />
      <SwitchProfileCard />
    </>
  )
}