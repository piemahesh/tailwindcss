import { useContext } from "react";
import { AuthDispatchContext, AuthStateContext } from "../context/AuthContext";

export const useAuth = () => {
  const dispatchContext = useContext(AuthDispatchContext);
  const stateContext = useContext(AuthStateContext);
  if (dispatchContext == undefined || stateContext == undefined) {
    throw new Error("something is missing");
  }
  return { dispatchContext, stateContext };
};
