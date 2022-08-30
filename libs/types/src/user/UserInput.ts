export interface UserCreateInputDTO {
  email: string;
  username: string;
  password: string;
}

export interface UserUpdateInputDTO {
  email?: string;
  password?: string;
}
