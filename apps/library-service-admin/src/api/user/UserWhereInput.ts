import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hashedPwd?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  memberRole?: "Option1";
  passwordHash?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
