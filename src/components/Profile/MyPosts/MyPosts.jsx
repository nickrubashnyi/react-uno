import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
             <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello, dude' likesCount='20'/>
                <Post message="It's my fist post" likesCount='35'/>
            </div>
        </div>
    )
}
export default MyPosts;