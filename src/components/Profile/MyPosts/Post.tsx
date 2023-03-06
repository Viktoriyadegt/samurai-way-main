import s from './Post.module.css'
import React from "react";

export type PostType = {}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src={'https://avatarfiles.alphacoders.com/334/334659.png'}/>
            post 1
        </div>
    )
}