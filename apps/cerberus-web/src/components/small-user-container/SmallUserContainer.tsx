import React from 'react';
import { Link } from 'wouter';
import { Button } from '../../blocks/button/Button';
import { Avatar } from '../../blocks/avatar/Avatar';
import { SmallUserContainerProps } from './SmallUserContainer.types';

export function SmallUserContainer({ user }: SmallUserContainerProps) {
  return (
    <Link href={`/users/${user.username}`}>
      <Button style={{ display: 'flex', justifyContent: 'center', height: 64, alignContent: 'center' }}>
        <Avatar look={user.look} headOnly style={{ height: 80, marginTop: -20 }} />
        <b style={{ marginTop: 5 }}> {user.username}</b>
      </Button>
    </Link>
  )
}