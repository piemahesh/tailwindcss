import React from "react";
import { AUTH_ACTIONS, useAuth } from "../context/AuthProvider";

export const Logout = () => {
  const { dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };
  return (
    <button onClick={handleLogout} className="btn bg-emerald-600">
      Logout
    </button>
  );
};
