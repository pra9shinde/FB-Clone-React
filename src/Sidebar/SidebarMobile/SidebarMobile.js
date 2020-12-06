import React, { useState } from 'react';
import './SidebarMobile.css';

import SidebarRow from '../SidebarRow/SidebarRow';
import Backdrop from '../../Backdrop/Backdrop';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIconFront from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

import { useStateValue } from '../../StateProvider';

function SidebarMobile(props) {
    const [{ user }, dispatch] = useStateValue();

    return (
        <>
            <Backdrop show={props.show} clicked={props.click}>
                <div className='sidebar-mobile'>
                    <SidebarRow src={user.photoURL} title={user.displayName} />
                    <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
                    <SidebarRow Icon={PeopleIcon} title='Friends' />
                    <SidebarRow Icon={ChatIcon} title='Messenger' />
                    <SidebarRow Icon={StoreIconFront} title='Marketplace' />
                    <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
                    <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
                </div>
            </Backdrop>
        </>
    );
}

export default SidebarMobile;
