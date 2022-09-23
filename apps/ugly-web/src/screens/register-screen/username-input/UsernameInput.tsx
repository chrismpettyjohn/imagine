import React from 'react';
import {UsernameInputProps} from './UsernameInput.types';

export function UsernameInput({ username, onChange }: UsernameInputProps) {
  return (
    <div className="row">
      <div className="col-12">
        <label>Username</label>
        <input type="text" placeholder="Username" value={username ?? ''} onChange={e => onChange(e.target.value ?? '')} />
      </div>
    </div>
  )
}
