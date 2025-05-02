import { authInitial } from "../constant/authConstant";
import { AUTH_ACTIONS } from "../types/authActions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case AUTH_ACTIONS.LOGOUT:
      return authInitial;
    default:
      return state;
  }
};

//  actions
