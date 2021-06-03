import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState('');
    
    useEffect(()=> {
        setSeed(Math.floor(Math.random() * 4000));
    }, [])
     
    const createChat = () => {
        const name = prompt("Enter name");

        if (name) {

        }
    };

    return !addNewChat ? (
        <div className = "sidebar-chat">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar-text">
                <h2>Name</h2>
                <p>Last message...</p>
            </div>
        </div>
        
        
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;