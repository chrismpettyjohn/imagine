import {AxiosInstance} from 'axios';
import {GoogleUserWire} from './google.types';
import {generateGoogleAPI} from './google.api';

export class GoogleService {
  private readonly googleAPI: AxiosInstance;

  constructor(accessToken: string) {
    this.googleAPI = generateGoogleAPI(accessToken);
  }

  async getUser(): Promise<GoogleUserWire> {
    const response = await this.googleAPI.get('me?fields=email');
    return response.data;
  }
}
