import React from 'react';
import { Accordion } from '../../blocks/accordion/Accordion';
import { ManageSiteSettingsForm } from '../../components/manage-site-settings-form/ManageSiteSettingsForm';
import { ManageGameSettingsForm } from '../../components/manage-game-settings-form/ManageGameSettingsForm';

export function ConfigurationOverviewScreen() {
  return (
    <>
      <h1>Configuration</h1>
      <Accordion header="Site Settings" defaultIsOpen>
        <ManageSiteSettingsForm />
      </Accordion>
      <Accordion header="Game Settings">
        <ManageGameSettingsForm />
      </Accordion>
    </>
  )
}
