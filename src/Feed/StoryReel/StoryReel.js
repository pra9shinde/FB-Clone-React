import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReels'>
            <Story
                image='https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png'
                profilePic='https://lh3.googleusercontent.com/a-/AOh14GhGauToJTP53V9qzWzZaEme8nQ_-gOWc8FL_y1lxA=s88-c-k-c0x00ffffff-no-rj-mo'
                title='Pranav Shinde'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU'
                profilePic='https://randomuser.me/api/portraits/women/66.jpg'
                title='Alexa Rice'
            />
            <Story
                image='https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                profilePic='https://randomuser.me/api/portraits/men/88.jpg'
                title='Brad Gibson'
            />
            <Story
                image='https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg'
                profilePic='https://randomuser.me/api/portraits/men/86.jpg'
                title='John Doe'
            />
            <Story
                image='https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png'
                profilePic='https://randomuser.me/api/portraits/women/11.jpg'
                title='Angela Harris'
            />
        </div>
    );
}

export default StoryReel;
