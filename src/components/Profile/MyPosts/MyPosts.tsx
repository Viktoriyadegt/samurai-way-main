import s from "../Profile.module.css";
import React from "react";
import {Post} from "./Post";

export type MyPostsPropsType = {}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            my posts
            <div>
                new posts
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
