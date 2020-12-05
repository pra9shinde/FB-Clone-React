import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import StoryReel from './StoryReel/StoryReel';
import Post from './Post/Post';

import db from '../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                />
            ))}

            {/* <Post
                profilePic='https://lh3.googleusercontent.com/a-/AOh14GhGauToJTP53V9qzWzZaEme8nQ_-gOWc8FL_y1lxA=s88-c-k-c0x00ffffff-no-rj-mo'
                username='pra9'
                message='Feeling Motivated!!!'
                timestamp='This is Timestamp'
                image='https://miro.medium.com/max/3840/1*g-eMEPIRnUtghTS6Z-wn_A.jpeg'
            />
            <Post
                profilePic='https://randomuser.me/api/portraits/women/66.jpg'
                username='User'
                message='Bored'
                timestamp='This is Timestamp'
            /> */}
        </div>
    );
}

export default Feed;
