import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Alexendra"
            message="Heya!"
            timestamp="40 minutes ago"
            profilePic="https://wallpaperaccess.com/full/5531286.jpg"
            />
            <Chat
            name="Emma"
            message="What's Up?"
            timestamp="40 seconds ago"
            profilePic="https://images.hdqwalls.com/wallpapers/emma-watson-4k-img.jpg"
            />
            <Chat
            name="Chris"
            message="Abe ja na be"
            timestamp="12 minutes ago"
            profilePic="https://i.pinimg.com/originals/be/d0/77/bed077aaca3aaab4b167245fec3c322b.jpg"
            />
            <Chat
            name="Alia"
            message="Ramayan Amazon pr hai kya?"
            timestamp="5 days ago"
            profilePic="..."
            />
        </div>
    )
}

export default Chats
