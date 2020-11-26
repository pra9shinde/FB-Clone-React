import React from 'react';
import './Sidebar.css';

import SidebarRow from './SidebarRow/SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIconFront from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow
                src='https://lh3.googleusercontent.com/a-/AOh14GhGauToJTP53V9qzWzZaEme8nQ_-gOWc8FL_y1lxA=s88-c-k-c0x00ffffff-no-rj-mo'
                title='Pranav Shinde'
            />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StoreIconFront} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
        </div>
    );
}

export default Sidebar;
