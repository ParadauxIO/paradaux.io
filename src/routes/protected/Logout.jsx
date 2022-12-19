import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../../state/supabase"

export default function Logout() { 
    const navigate = useNavigate();

    useEffect(() => { 
        async function logout() { 
            await supabase.auth.signOut()
            navigate("/");
        }
        logout();
    }, [])
    
    return (
        <></>
    )
}