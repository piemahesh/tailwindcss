import React from "react";
import { useAuth } from "../context/AuthProvider";
import { DispatchUser } from "../components/DispatchUser";
import { Logout } from "../components/Logout";

export const Homepage = () => {
  const { state } = useAuth();
  console.log(state);
  return (
    <section>
      <h1>Homepage</h1>
      <DispatchUser />
      {state?.user !== null && <div>{JSON.stringify(state.user)}</div>}
      <Logout />
    </section>
  );
};
