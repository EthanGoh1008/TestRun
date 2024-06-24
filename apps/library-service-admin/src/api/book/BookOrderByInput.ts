import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  author?: SortOrder;
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
