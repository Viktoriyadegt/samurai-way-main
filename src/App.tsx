import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={'https://www.pngplay.com/wp-content/uploads/12/Snapchat-Icon-No-Background.png'}/>
            </header>
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
        </div>
    );
}

export default App;
