import React, { SyntheticEvent } from 'react';
import { ButtonDanger, ButtonBrand } from '../button/Button.remix';
import { ConnectedAccountCardProps } from './ConnectedAccountCard.types';
import { ConnectedAccountCardContainer, ConnectedAccountCardInformationContainer, ConnectedAccountCardStatusContainer } from './ConnectedAccountCard.styled';

export function ConnectedAccountCard({ connected, icon, onToggle, ...props }: ConnectedAccountCardProps) {
  const onToggleConnection = (event: SyntheticEvent) => {
    event.preventDefault();
    onToggle();
  }
  return (
    <ConnectedAccountCardContainer {...props}>
      <ConnectedAccountCardInformationContainer $connected={connected}>
        {icon}
      </ConnectedAccountCardInformationContainer>
      <ConnectedAccountCardStatusContainer>
        {
          connected
            ? (
              <ButtonDanger style={{ width: '90%', fontWeight: 'bold' }} onClick={onToggleConnection}>
                Disconnect
              </ButtonDanger>
            )
            : (
              <ButtonBrand style={{ width: '90%', fontWeight: 'bold' }} onClick={onToggleConnection}>
                Connect
              </ButtonBrand>
            )
        }
      </ConnectedAccountCardStatusContainer>
    </ConnectedAccountCardContainer>
  )
}