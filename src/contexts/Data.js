import React, { createContext, useReducer } from "react";
export const DataContext = createContext();

const Data = ({ children }) => {
  const data = {
    users: null,
    posts: null,
    comments: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_USER":
        return { ...state, users: action.payload };
      case "DELETE_USER":
        const filterData = state.users.filter(
          (user) => user?.id !== action.payload
        );
        return { ...state, users: filterData };
      case "FETCH_POSTS":
        return { ...state, posts: action.payload };
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, data);

  return (
    <DataContext.Provider value={{ ...todos, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default Data;
