import { useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../../components/protected/AdminNav";

export default function BlogEditor() { 
    let { id } = useParams();
    let [form, setForm] = useState({
        id: null
    })

    function changeForm(event) {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    }

    return (
        <div className="blog-editor">
            <AdminNav />
            <div className="blog-editor-content">
                <h1>Blog Editor » {id}</h1>
                <div className="blog-editor-form">
                    <div className="form-item">
                        <span>
                            id
                        </span>
                        <input
                            name="id"
                            value={form.id}
                            onChange={changeForm}
                        />
                    </div>
                    <div className="form-item">
                        <span>
                            id
                        </span>
                        <input
                            name="id"
                            value={form.id}
                            onChange={changeForm}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}