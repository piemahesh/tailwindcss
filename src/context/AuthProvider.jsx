/*
*******Context API*******
1) context
2) provider
3) reducer -> dispatch,state  -> useReducer
4) action -> type, payload
5) hooks -> useContext
*/

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
//  intialState
const initialState = {
  isAuthenticated: false,
  user: null,
  isError: false,
  errorMessage: "",
};
// action types
export const AUTH_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};
//  reducers
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case AUTH_ACTIONS.LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};
// provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
//  hooks
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  // if (state == undefined || dispatch == undefined) {
  //   throw new Error("something went wrong on auth provider");
  // }
  return { state, dispatch };
};

// actions

export const setUser = (dispatch, data) => {
  dispatch({ type: AUTH_ACTIONS.LOGIN, payload: data });
};
