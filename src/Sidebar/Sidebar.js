import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreIcon from '@material-ui/icons/More';
import {IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-top">
                <AccountCircleIcon/>
                <div className="sidebar-topRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <MoreIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlinedIcon />
                    <input
                     placeholder="Start a new chat" type ="text"/>
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;