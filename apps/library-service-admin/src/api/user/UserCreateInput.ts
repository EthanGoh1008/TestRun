import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  hashedPwd?: string | null;
  lastName?: string | null;
  memberRole?: "Option1" | null;
  password: string;
  passwordHash?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
