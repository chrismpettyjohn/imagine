export interface ForgotPasswordRequestCreateInput {
  emailAddress: string;
}

export interface ForgotPasswordRequestRedeemInput {
  requestCode: string;
  newPassword: string;
}