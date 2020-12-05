import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Post(props) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={props.profilePic} className='post__avatar' />
                <div className='post__topInfo'>
                    <h3>{props.username}</h3>
                    {/* <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{props.message}</p>
            </div>
            <div className='post__image'>
                <img src={props.image} alt='' />
            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;
