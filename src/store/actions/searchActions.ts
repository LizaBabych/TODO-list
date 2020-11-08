import { SET_SEARCH, ISearchAction } from "../../types";

export const setSearch = (search: string): ISearchAction => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};
