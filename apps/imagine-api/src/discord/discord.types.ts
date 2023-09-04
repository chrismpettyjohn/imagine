export interface DiscordUserWire {
  id: string;
  username: string;
  email: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null;
  accent_color: null;
  global_name: string;
  avatar_decoration_data: null;
  banner_color: null;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
}
