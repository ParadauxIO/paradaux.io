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

export default function App() { 
  const [session, setSession] = useState(null)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "/login",
      element: !session ? <AuthN/> : <AdminHome/>
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
       <RouterProvider router={router} />
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
