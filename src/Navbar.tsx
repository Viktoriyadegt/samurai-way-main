import React from 'react';

export type NavbarPropsType = {}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={'nav'}>
            <a href={'Profile'}>
                <div>Profile</div>
            </a>
            <a href={'Message'}>
                <div>Message</div>
            </a>
            <a href={'Music'}>
                <div>Music</div>
            </a>
            <a href={'Settings'}>
                <div>Settings</div>
            </a>
        </nav>
    );
};

export default Navbar;