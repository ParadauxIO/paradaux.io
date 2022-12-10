import Nav from "../components/common/Nav"
import "./Login.css"
import {
    Auth,
    ThemeSupa,
  } from '@supabase/auth-ui-react'
import { supabase } from "../state/supabase"

export default function AuthN() { 

    return (
        <div className="login-page">
            <Nav />
            <div className="auth-container">
                <div className="auth-component">
                    <h1>Authentication</h1>
                    <p> This page is protected.</p>
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
                </div>
            </div>
        </div>
    )
}