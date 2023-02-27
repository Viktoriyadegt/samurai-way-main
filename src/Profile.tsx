import React from 'react';

export type ProfilePropsType = {}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className="content">
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
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;