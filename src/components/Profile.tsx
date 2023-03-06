import React from 'react';
import s from './Profile.module.css'

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
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;