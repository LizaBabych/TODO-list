import { ISearchAction, IInitialSearch } from "../../types";

const initialState: IInitialSearch = {
  search: "",
};

const searchReducer = (state = initialState, action: ISearchAction): IInitialSearch => {
  switch (action.type) {
    case "SET_SEARCH":
       return {...state, search: action.payload };
    default: return state;
  }
};

export default searchReducer;
