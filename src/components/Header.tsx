import React from 'react';
import s from './Header.module.css'

export type HeaderPropsType = {}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={'https://www.pngplay.com/wp-content/uploads/12/Snapchat-Icon-No-Background.png'}/>
        </header>
    );
};

export default Header;