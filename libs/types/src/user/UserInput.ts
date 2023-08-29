import {UserGender} from './User';

export interface UserCreateInputDTO {
  email: string;
  username: string;
  password: string;
  gender?: UserGender;
  look?: string;
}

export interface UserUpdateInputDTO {
  email?: string;
  password?: string;
}
