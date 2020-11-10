import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TStateTodo, IRootReducer } from "../types";
import { setSearch } from "../store/actions/searchActions";
import { setState } from "../store/actions/stateActions";

const Search: React.FC = () => {

  const search = useSelector((state: IRootReducer) => state.searchReducer.search);

  const dispatch = useDispatch();

  const setFilter = (search: string) => { dispatch(setSearch(search)); };
  const setTodoState = (state: TStateTodo) => { dispatch(setState(state)); };

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    (search !== "") ? setTodoState("search") : setTodoState("all");
  };

  return (
    <form className="form-inline" onSubmit={sendForm}>
      <input
        value={search}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setFilter(e.target.value)}
        />
    </form>
  );
};

export default Search;
