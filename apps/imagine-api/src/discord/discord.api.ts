import Axios, {AxiosInstance} from 'axios';

export function generateDiscordAPI(accessToken: string): AxiosInstance {
  return Axios.create({
    baseURL: 'https://discord.com/api/',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
