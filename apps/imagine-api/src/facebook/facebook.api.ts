import Axios, {AxiosInstance} from 'axios';

export function generateFacebookAPI(accessToken: string): AxiosInstance {
  return Axios.create({
    baseURL: 'https://graph.facebook.com/',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
}
