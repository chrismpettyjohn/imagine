import {AxiosInstance} from 'axios';
import {DiscordUserWire} from './discord.types';
import {generateDiscordAPI} from './discord.api';

export class DiscordService {
  private readonly discordAPI: AxiosInstance;

  constructor(accessToken: string) {
    this.discordAPI = generateDiscordAPI(accessToken);
  }

  async getUser(): Promise<DiscordUserWire> {
    const response = await this.discordAPI.get('users/@me');
    console.log(response.data);
    return response.data;
  }
}
