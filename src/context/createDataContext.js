import React, { useReducer } from "react";

export default (reducerFunction, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    return (
      <Context.Provider value={{ state: state }}>{children}</Context.Provider>
    );
  };
};
