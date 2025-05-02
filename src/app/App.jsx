import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "../feature/auth/provider/AuthProvider";

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
};
