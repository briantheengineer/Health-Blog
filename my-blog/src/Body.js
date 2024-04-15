import "./Body.css"
import React from "react"
import blogPosts from "./blogPosts.json"


export default function Body() {
    const lastPosts = blogPosts.slice(-2);

    return (
        <div className="body-div">
            <h1>Latest Posts</h1>
            {lastPosts.map(posts => (
                <div key={posts.id}>
                    <h1>{posts.content}</h1>
                     </div>
            
            ))}
        </div>
    )
}