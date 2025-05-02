import { createBrowserRouter } from "react-router-dom";
import { AuthScreen } from "../feature/auth/page/AuthScreen";

export const routes = createBrowserRouter([
  { path: "/", element: <AuthScreen /> },
]);
