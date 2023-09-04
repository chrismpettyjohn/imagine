import Axios, {AxiosInstance} from 'axios';

export function generateGoogleAPI(accessToken: string): AxiosInstance {
  return Axios.create({
    baseURL: 'https://www.googleapis.com/',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
