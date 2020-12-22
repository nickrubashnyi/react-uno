import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hello, dude' likecounts='20'/>
                <Post message="It's my fist post" likecounts='35'/>
            </div>
        </div>
    )
}
export default MyPosts;