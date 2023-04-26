export interface User {
  uid: string;
  password: string;
  email: string;
  name: string;
  token?: string;
  created_at: Date;
  updated_at: Date | null;
}
