export interface SessionUpdateEmailInput {
  email: string;
  password: string;
}

export interface SessionUpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
}

export interface SessionDisconnectAccountInput {
  confirm: boolean;
}

export interface SessionUpdateLanguageInput {
  language: string;
}