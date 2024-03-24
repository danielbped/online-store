interface LoginToken {
  data: string;
}

export interface LoginResponse {
  data: LoginToken;
}

export interface LoginData {
  email?: string,
  password?: string
}
