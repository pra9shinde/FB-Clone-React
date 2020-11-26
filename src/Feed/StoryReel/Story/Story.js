import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ image, profilePic, title }) {
    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
            <Avatar className='story__avatar' src={profilePic} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
