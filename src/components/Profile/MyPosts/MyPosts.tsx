import s from "../Profile.module.css";
import React from "react";
import {Post} from "./Post";

export type MyPostsPropsType = {}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            my posts
            <div>
                <textarea>new post</textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post post={'Hi, haw are you?'} likesCount={15}/>
                <Post post={"It's my first post"} likesCount={87}/>
            </div>
        </div>
    )
}
