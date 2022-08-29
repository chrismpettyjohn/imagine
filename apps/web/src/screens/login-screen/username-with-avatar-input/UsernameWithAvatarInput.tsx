import React from 'react';
import {UsernameWithAvatarInputProps} from './UsernameWithAvatarInput.types';
import {useFetchAvatarForUserHook} from './fetch-avatar-for-user.hook';

export function UsernameWithAvatarInput({username, onChange}: UsernameWithAvatarInputProps) {
  const {loading, avatar} = useFetchAvatarForUserHook(username);
  console.log(username, avatar);
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" className="form-control" id="username" placeholder="Username" autoComplete="username" required value={username ?? ''} onChange={(event: any) => onChange(event?.target?.value ?? '')} />
      <div id="preview-user" style={{backgroundImage: loading ? 'url(https://www.habboon.pw/img/ghost.png)' : `url(https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${avatar})` }} />
    </div>
  )
}
