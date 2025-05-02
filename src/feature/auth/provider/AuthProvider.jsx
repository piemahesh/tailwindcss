import { useMemo, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import { authInitial } from "../constant/authConstant";
import { AuthDispatchContext, AuthStateContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitial);
  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);
  return (
    <AuthStateContext.Provider value={memoizedState}>
      <AuthDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
