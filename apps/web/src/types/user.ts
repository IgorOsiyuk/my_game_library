export type User = {
  email: string;
  name: string;
};

export type UpdateUserDataRequest = {
  name?: string;
  password?: string;
  confirmPassword?: string;
};
