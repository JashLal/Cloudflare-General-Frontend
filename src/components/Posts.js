import React, { useEffect, useState } from "react"
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                "https://gen.jlal170700.workers.dev/api/posts"
            )
            const postsResp = await resp.json()
            console.log(postsResp)
            setPosts(postsResp)
        }
        getPosts()
    }, [])

    return (
        <div className="Container">
            <h1>Posts</h1>
            {posts.map((post) => (
                <div className="Post">
                    <div className="User">{post.username}</div>
                    <div className="Title">{post.title}</div>
                    <div className="Content">{post.content}</div>
                </div>
            ))}
        </div>
    )
}

export default Posts