import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root";
import "./global.css"
import AdminHome from "./routes/protected/AdminHome";
import AuthN from "./routes/AuthN";
import { supabase } from "./state/supabase";
import Logout from "./routes/protected/Logout";
import BlogEntries from "./routes/protected/BlogEntries";
import { RecoilRoot } from "recoil";
import BlogEditor from "./routes/protected/BlogEditor";

export default function App() { 
  const [session, setSession] = useState(null)

  function protectedView(component) { 
    return !session ? <AuthN /> : component;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "/admin",
      element: protectedView(<AdminHome/>)
    },
    {
      path: "/admin/blogs",
      element: protectedView(<BlogEntries/>)
    },
    {
      path: "/admin/blogs/edit/:id",
      element: protectedView(<BlogEditor/>)
    },
    {
      path: "/logout",
      element: <Logout/>
    }
  ]);

  useEffect (() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
       </RecoilRoot>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)