import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.pictureSize}
                    src="https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png" alt="react"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;