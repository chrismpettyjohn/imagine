import Axios, {AxiosInstance} from 'axios';

export function generateGoogleAPI(accessToken: string): AxiosInstance {
  return Axios.create({
    baseURL: 'https://graph.google.com/',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
