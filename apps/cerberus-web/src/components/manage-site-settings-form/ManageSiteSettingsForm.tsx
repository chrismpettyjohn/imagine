import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { configContext } from '@imagine-cms/web';
import { ConfigUpdateInputDTO } from '@imagine-cms/types';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Badge } from '../../blocks/badge/Badge';

export function ManageSiteSettingsForm() {
  const { config } = useContext(configContext);
  const [configDTO, setConfigDTO] = useState<ConfigUpdateInputDTO>({
    siteName: config?.siteName,
    logoURL: config?.logoURL,
    nitroURL: config?.nitroURL,
    badgeURL: config?.badgeURL,
    badgeEXT: config?.badgeEXT,
    figureURL: config?.figureURL,
    groupBadgeURL: config?.groupBadgeURL,
    discordURL: config?.discordURL,
    discordWidget: config?.discordWidget,
    facebookURL: config?.facebookURL,
    instagramURL: config?.instagramURL,
    twitterURL: config?.twitterURL,
    snapchatURL: config?.snapchatURL,
    dateFormat: config?.dateFormat,
    softwareVersion: config?.softwareVersion,
  })

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
    setConfigDTO(_ => ({
      ..._,
      [event.target.name]: event.target.value ?? '',
    }))
  }, [setConfigDTO]);

  return (
    <Form>
      <label>Site Name</label>
      <Input name="siteName" value={configDTO.siteName} onChange={onChange} />

      <label>Logo URL</label>
      <Input name="logoURL" value={configDTO.logoURL} onChange={onChange} />

      <label>Nitro URL</label>
      <Input name="nitroURL" value={configDTO.nitroURL} onChange={onChange} />

      <div style={{ display: 'flex', flex: 1, gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 50 }}>
          <label>&nbsp;</label>
          <Badge badge={{ code: 'ADM' as any }} overrideBadgeURL={configDTO.badgeURL} overrideBadgeEXT={configDTO.badgeEXT} />
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 8 }}>
          <label>Badges URL <small>(album1584)</small></label>
          <Input name="badgeURL" value={configDTO.badgeURL} onChange={onChange} />
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 8 }}>
          <label>Badge Extension</label>
          <Input name="badgeEXT" value={configDTO.badgeEXT} onChange={onChange} />
        </div>
      </div>

      <label>Figure URL</label>
      <Input name="figureURL" value={configDTO.figureURL} onChange={onChange} />

      <label>Group Badge URL</label>
      <Input name="groupBadgeURL" value={configDTO.groupBadgeURL} onChange={onChange} />

      <label>Date Format</label>
      <Input name="dateFormat" value={configDTO.dateFormat} onChange={onChange} />

      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <ButtonPrimary type="submit">Save</ButtonPrimary>
      </div>
    </Form>
  )
}