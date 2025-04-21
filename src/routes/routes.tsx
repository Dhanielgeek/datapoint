import { createBrowserRouter } from "react-router-dom";

import Homelay from "../layout/homelay";
import Home from "../page/home";

export const Routes = createBrowserRouter([
  {
    path: "",
    element: <Homelay />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
