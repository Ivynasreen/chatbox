import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Chat.css';

const Chat = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 4000));
    }, [])
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat-headerInfo">
                    <h3>Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-headerRight">

                </div>
            </div>
            <div className="chat-body">

            </div>
            <div className="chat-footer">

            </div>
        </div>
    );
};

export default Chat;