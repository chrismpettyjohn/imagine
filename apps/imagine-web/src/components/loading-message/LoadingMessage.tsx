import React from 'react';
import { LoadingMessageProps } from './LoadingMessage.types';

export function LoadingMessage({ children = 'Connecting' }: LoadingMessageProps) {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
      <img src="https://media0.giphy.com/media/Zap7zlqB5QHXbSSvqn/200w.gif?cid=6c09b952newsbwirfh8zctttkigw0r43smm80lbyax1bkzzb&ep=v1_internal_gif_by_id&rid=200w.gif&ct=s" />
      <h2>{children}</h2>
    </div>
  )
}