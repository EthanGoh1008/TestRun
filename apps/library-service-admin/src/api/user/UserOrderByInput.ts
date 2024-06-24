import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  hashedPwd?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  memberRole?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
