import React from 'react';
import {EmailInputProps} from './EmailInput.types';

export function EmailInput({ email, onChange }: EmailInputProps) {
  return (
    <div className="row">
      <div className="col-12">
        <label>Email Address</label>
        <input type="text" placeholder="Email" value={email ?? ''} onChange={e => onChange(e.target.value ?? '')} />
      </div>
    </div>
  )
}
