import React from 'react';
import s from './Navbar.module.css'

export type NavbarPropsType = {}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <a href={'Profile'}>
                <div className={s.item}>Profile</div>
            </a>
            <a href={'Message'}>
                <div className={`${s.item} ${s.active}`}>Message</div>
            </a>
            <a href={'Music'}>
                <div className={s.item}>Music</div>
            </a>
            <a href={'Settings'}>
                <div className={s.item}>Settings</div>
            </a>
        </nav>
    );
};

export default Navbar;