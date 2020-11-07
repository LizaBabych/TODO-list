const setSearchTodo = (searchTodo: string) => {
  return {
    type: "SET_SEARCH_TODO",
    payload: searchTodo,
  };
};

export default setSearchTodo;
