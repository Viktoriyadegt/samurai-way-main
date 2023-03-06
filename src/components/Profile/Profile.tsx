import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export type ProfilePropsType = {}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <div>
                <img src={'https://images5.alphacoders.com/112/1123013.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;