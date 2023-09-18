import React from 'react';
import { Accordion } from '../../blocks/accordion/Accordion';
import { ManageSiteSettingsForm } from '../../components/manage-site-settings-form/ManageSiteSettingsForm';
import { ManageGameSettingsForm } from '../../components/manage-game-settings-form/ManageGameSettingsForm';
import { Card } from '../../blocks/card/Card';

export function ConfigurationOverviewScreen() {
  return (
    <Card header="Configuration" style={{ height: '100%' }}>
      <Accordion header="Site Settings" defaultIsOpen>
        <ManageSiteSettingsForm />
      </Accordion>
      <Accordion header="Game Settings">
        <ManageGameSettingsForm />
      </Accordion>
    </Card>
  )
}
