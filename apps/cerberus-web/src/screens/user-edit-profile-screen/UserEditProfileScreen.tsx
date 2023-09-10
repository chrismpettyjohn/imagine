import React from 'react';
import { useRoute } from 'wouter';
import { Card } from '../../blocks/card/Card';

export function UserEditProfileScreen() {
  const [, params] = useRoute<{ userID: string }>('/users/:userID');
  const userID = Number(params!.userID);
  return (
    <>
      <h1>Users <small>- Editing {userID}</small></h1>
      <Card header="About">
        hoe
      </Card>
      <Card header="Possible Alts">
        hoe
      </Card>
      <Card header="Sanction History">
        hoe
      </Card>
      <Card header="Player Stats">
        hoe
      </Card>
      <Card header="Badges">
        hoe
      </Card>
      <Card header="Rooms">
        hoe
      </Card>
      <Card header="Trades">
        hoe
      </Card>
      <Card header="Inventory">
        hoe
      </Card>
      <Card header="Furniture">
        hoe
      </Card>
    </>
  )
}