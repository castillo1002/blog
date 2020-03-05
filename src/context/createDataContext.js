import React, { useReducer } from "react";

export default (reducerFunction, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    //actions === { addBlogPost: (dispatch) => { return () => {dispatch()} } }
    const boundActions = {};
    for (let key in actions) {
      // Line below: boundActions.addBlogPost = () => dispatch({ type: "add_blogpost" })
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state: state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
