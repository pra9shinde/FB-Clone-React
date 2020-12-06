import React, { useState } from 'react';
import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import SidebarMobile from './Sidebar/SidebarMobile/SidebarMobile';
import { useStateValue } from './StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue();
    const [showMobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!showMobileMenu);
    };

    return (
        <div className='app'>
            {!user ? (
                <Login />
            ) : (
                <React.Fragment>
                    <Header click={toggleMobileMenu} />
                    <div className='app__body'>
                        <Sidebar />
                        <Feed />
                        <SidebarMobile show={showMobileMenu} click={toggleMobileMenu} />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
