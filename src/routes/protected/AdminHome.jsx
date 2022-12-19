import AdminNav from "../../components/protected/AdminNav"
import "./AdminHome.css"

export default function AdminHome() { 
    return (
        <div className="admin-home">
            <AdminNav/>
            <div className="admin-content">
                <h1> Welcome to cms!</h1>
                <p> Check one of pages in the navbar to continue.</p>
            </div>
        </div>
    )
}