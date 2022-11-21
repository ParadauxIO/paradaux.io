import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root";
import "./global.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
