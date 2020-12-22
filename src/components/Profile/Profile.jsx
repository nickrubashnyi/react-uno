import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640"
                    alt="nature"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;