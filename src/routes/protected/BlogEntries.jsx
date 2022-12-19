import { AuthError } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import AdminNav from "../../components/protected/AdminNav"
import { toHumanTime } from "../../partials/time";
import useBlogPosts from "../../state/hooks/useBlogPosts";
import "./BlogEntries.css"

function BlogEntry({ entry }) { 
    let title = entry.encoded_content.split("\n")[0].replace("# ", "")

    return (
        <tr>
            <td>{entry.id}</td>
            <td style={{fontWeight: "bold"}}>{ title }</td>
            <td>{ entry.author_id }</td>
            <td>{ toHumanTime(entry.created_at) }</td>
            <td>{ toHumanTime(entry.published_at) }</td>
            <td>{ toHumanTime(entry.last_edited_at) }</td>
            <td className="actions">
                <Link to={ "/admin/blogs/edit/" + entry.id}>Edit</Link>
                <a onClick={() => { }}>Publish</a>
                <a onClick={ () => { }}>Delete</a>
            </td>
        </tr>
    )
}

export default function BlogEntries() { 
    let blogApi = useBlogPosts();
    return (
        <div className="blog-entries">
            <AdminNav/>
            <div className="blog-entries-content">
                <h1> Blog Entries </h1>
                <p> Here is where you create, modify or delete blog entries.</p>
                <div className="blog-entries-list">
                    <table id="blog-entries">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>author_id</th>
                                <th>created</th>
                                <th>published</th>
                                <th>edited</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogApi.blogPosts.map(entry => <BlogEntry entry={entry}/>)}
                        </tbody>
                    </table>
                    <div className="bottom-actions">
                        <a>Add</a>
                    </div>

                </div>
            </div>
        </div>
    )
}