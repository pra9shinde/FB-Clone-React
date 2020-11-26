import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {/* Feed */}
        </div>
    );
}

export default Feed;