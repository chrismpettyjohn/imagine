import React, { useMemo } from 'react';
import { Card } from '../../components/card/Card';

export function LoginWithDiscordScreen() {
  const discordAuthCode = useMemo(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get('code');
  }, []);
  return (
    <Card header="Discord Login">
      logging in with token <b>{discordAuthCode}</b>
    </Card>
  )
}