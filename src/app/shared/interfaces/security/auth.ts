export interface IUserLogin {
    email: string,
    password: string
}

export interface ILoginRes {
  refresh: string,
  access: string
}

export interface IAuth {
  exp: number,
  iat: number,
  user_id: number
}
