import s from './Post.module.css'
import React from "react";

export type PostType = {
    post: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src={'https://avatarfiles.alphacoders.com/334/334659.png'}/>
            {props.post}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}