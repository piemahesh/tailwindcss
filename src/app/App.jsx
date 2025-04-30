import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "../context/AuthProvider";

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
};
