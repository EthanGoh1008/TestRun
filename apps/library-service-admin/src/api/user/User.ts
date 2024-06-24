import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  hashedPwd: string | null;
  id: string;
  lastName: string | null;
  memberRole?: "Option1" | null;
  passwordHash: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
