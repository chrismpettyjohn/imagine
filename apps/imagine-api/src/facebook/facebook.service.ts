import {AxiosInstance} from 'axios';
import {FacebookUserWire} from './facebook.types';
import {generateFacebookAPI} from './facebook.api';

export class FacebookService {
  private readonly facebookAPI: AxiosInstance;

  constructor(accessToken: string) {
    this.facebookAPI = generateFacebookAPI(accessToken);
  }

  async getUser(): Promise<FacebookUserWire> {
    const response = await this.facebookAPI.get('me?fields=email');
    return response.data;
  }
}
