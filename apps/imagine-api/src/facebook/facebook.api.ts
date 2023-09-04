import Axios, {AxiosInstance} from 'axios';

export function generateFacebookAPI(accessToken: string): AxiosInstance {
  return Axios.create({
    baseURL: 'https://facebook.com/api/',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
