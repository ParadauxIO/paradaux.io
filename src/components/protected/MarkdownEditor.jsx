import { useState } from "react"

export default function MarkdownEditor({ initialValue }) { 
    let [value, setValue] = useState(initialValue);


    return (
        <div className="markdown-editor">
            <div className="textarea">

            </div>
            <div className="render-view">
                
            </div>
        </div>
    )
}