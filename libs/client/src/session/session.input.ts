export interface SessionUpdateEmailInput {
  email: string;
  password: string;
}

export interface SessionUpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
}