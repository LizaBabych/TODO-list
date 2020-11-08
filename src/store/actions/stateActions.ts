import { SET_STATE, TStateTodo, IStateAction } from "../../types";

export const setState = (state: TStateTodo): IStateAction => {
  return {
    type: SET_STATE,
    payload: state,
  };
};
