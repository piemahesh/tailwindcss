import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../page/Homepage";

export const routes = createBrowserRouter([
  { path: "/", element: <Homepage /> },
]);
