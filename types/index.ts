export interface IUser {
  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  is_activated: boolean;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}
