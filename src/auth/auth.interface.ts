export interface AuthRegisterDto {
  email: string;
  name: string;
  password: string;
}

export interface AuthCredentialsDto {
  email: string;
  password: string;
}

export interface AuthConfirmRegisterDto {
  code: string;
  email: string;
}
