import React from 'react';
import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import { useStateValue } from './StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='app'>
            {!user ? (
                <Login />
            ) : (
                <React.Fragment>
                    <Header />
                    <div className='app__body'>
                        <Sidebar />
                        <Feed />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
