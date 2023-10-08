import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function DeviceAccountCard() {
  const { session } = useContext(sessionContext);
  const isDeviceConnected = false;

  const icon = <i className="fa fa-phone" />

  const onToggleDeviceAccount = async () => {
    try {
      if (isDeviceConnected) {
        toast.success(<>{icon} You disabled device login on your account</>);
        return;
      }
    } catch (e) {
      toast.error(<>{icon} There was a problem</>);
    }
  }

  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleDeviceAccount} connected={isDeviceConnected} />
  )
}