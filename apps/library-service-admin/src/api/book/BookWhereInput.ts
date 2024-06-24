import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  availability?: "Option1";
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
