import React from 'react';
import {UsernameWithAvatarInputProps} from './UsernameWithAvatarInput.types';

export function UsernameWithAvatarInput({username, onChange}: UsernameWithAvatarInputProps) {


  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" className="form-control" id="username" placeholder="Username" autoComplete="username" required />
      <div id="preview-user" style={{backgroundImage: 'url(https://www.habboon.pw/img/ghost.png)' }} />
    </div>
  )
}
