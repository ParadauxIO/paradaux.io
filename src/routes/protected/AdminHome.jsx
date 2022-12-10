import { supabase } from "../../state/supabase"

export default function AdminHome() { 
    return (
        <div onClick={() => { supabase.auth.signOut()}}>
            Logout
        </div>
    )
}