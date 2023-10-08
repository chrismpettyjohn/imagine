import { useEffect, useState } from 'react';

export function useIPAddress(): { ipAddress: string, loading: boolean } {
  const [ipAddress, setIPAddress] = useState('');

  const onFetchIPAddress = async () => {
    const response = await fetch('https://api.ipify.org/?format=json');
    const body = await response.json();
    setIPAddress(body.ip);
  }

  useEffect(() => {
    onFetchIPAddress();
  }, []);

  return { ipAddress, loading: !ipAddress };
}