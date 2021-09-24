import { Avatar } from '@mui/material';
import React from 'react'
import {useState} from 'react';
import './ChatScreen.css';

function ChatScreen() {
    const [input,setInput]=useState('');
    const [messages, setMessages]=useState([
        {
            name: "Alexandra",
            image: "https://wallpaperaccess.com/full/5531286.jpg",
            message: "Heya!",
        },
        {
            name: "Alexandra",
            image: "https://wallpaperaccess.com/full/5531286.jpg",
            message: "How you doin?",
        },
        {
            message: "I'm good. How are you? :)"
        }
    ])

    const handleSend=e=>{
        e.preventDefault();

        setMessages([...messages,{ message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ALEXANDRA ON 20/09/21</p>
            {messages.map((message)=>(
                message.name ?(

                    <div className="chatScreen__message">
                    <Avatar
                    className="ChatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                    ):(
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                    )
            ))}
    <form className="chatScreen__input">
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className="chatScreen__inputField"
        placeholder="Type a message..." type="text"/>
        <button 
        onClick={handleSend} type="submit"
        className="chatScreen__inputbutton">SEND</button>
    </form>
</div>
    );
}


export default ChatScreen;
