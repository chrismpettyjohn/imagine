import gql from 'graphql-tag';
import React, { useEffect } from 'react';
import { UserWire } from '@imagine-cms/types';
import { useRunQuery } from '@imagine-cms/web';
import { Input } from '../../../components/input/Input';
import { UsernameWithAvatarInputProps } from './UsernameWithAvatarInput.types';

const FETCH_AVATAR_FOR_USER = gql`
    query($username: String!) {
        users(username: $username) {
            look
        }
    }
`

export function UsernameWithAvatarInput({ username, onChange }: UsernameWithAvatarInputProps) {
  const { runQuery, loading, data } = useRunQuery<{ users: UserWire[] }>(FETCH_AVATAR_FOR_USER, { username });

  useEffect(() => {
    if (username) {
      runQuery();
    }
  }, [username]);

  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <Input type="text" name="username" className="form-control" id="username" placeholder="Username" autoComplete="username" required value={username ?? ''} onChange={(event: any) => onChange(event?.target?.value ?? '')} />
      <div id="preview-user" style={{ backgroundImage: loading ? 'url(https://www.habboon.pw/img/ghost.png)' : `url(https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${data?.users?.[0]?.look})` }} />
    </div>
  )
}
