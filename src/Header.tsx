import React from 'react';

export type HeaderPropsType = {}
const Header = (props: HeaderPropsType) => {
    return (
        <header className='header'>
            <img src={'https://www.pngplay.com/wp-content/uploads/12/Snapchat-Icon-No-Background.png'}/>
        </header>
    );
};

export default Header;