import React from "react";
import { AUTH_ACTIONS, setUser, useAuth } from "../context/AuthProvider";

export const DispatchUser = () => {
  const { dispatch } = useAuth();

  const handleDispatch = () => {
    setUser(dispatch, { username: "farhana", id: 524654 });
  };
  return (
    <button onClick={handleDispatch} className="btn bg-purple-500">
      Dispatch
    </button>
  );
};
