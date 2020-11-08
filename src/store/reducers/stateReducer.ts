import { IStateAction, IInitialState } from "../../types";

const initialState: IInitialState = {
  state: "all",
};

const stateReducer = (state = initialState, action: IStateAction): IInitialState => {
  switch (action.type) {
    case "SET_STATE":
       return {...state, state: action.payload };
    default: return state;
  }
};

export default stateReducer;
