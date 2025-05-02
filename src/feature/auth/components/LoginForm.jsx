import React from "react";
import { useAuth } from "../hooks/useAuth";
import { AUTH_ACTIONS } from "../types/authActions";

export const LoginForm = () => {
  const { dispatchContext, stateContext } = useAuth();
  console.log(stateContext);
  const handleDispatch = () => {
    dispatchContext({
      type: AUTH_ACTIONS.LOGIN,
      payload: {
        user: { username: "farhana", password: "farahana132456" },
        token: "sadjfsd54sadflpjasdf54sadfklpsadf654",
      },
    });
  };
  return (
    <section className="bg-gray-400 p-4">
      <div className="flex flex-col">
        <label htmlFor="username">username</label>
        <input type="text" id="username" placeholder="Enter user name" />
      </div>
      <button onClick={handleDispatch} className="btn">
        submit
      </button>
    </section>
  );
};
