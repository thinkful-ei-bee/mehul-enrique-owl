import React from 'react';

function Chat(id,type,message,time,timeStamp,avatar,name) {
   //inSession
   if(type === 'message'){
       let date = new Date(time);
       let hours = date.getHours();
       let minutes = date.getMinutes();
    return (
        <li className="Message">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <h3>{name}</h3>
            <p>{hours}:{minutes}</p>
            <p>{message}</p>
        </li>
    );
   }
   else if(type === 'thumbs-up'){
    return (
        <li className="action">
            <p>{name} gave a thumbs up </p>
        </li>
    );
   }
   else if(type === 'thumbs-down'){
    return (
        <li className="action">
            <p>{name} gave a thumbs down </p>
        </li>
    );
   }
   else if(type === 'raise-hand'){
    return (
        <li className="action">
            <p>{name} raised their hand </p>
        </li>
    );
   }
   else if(type === 'clap'){
    return (
        <li className="action">
            <p>{name} clapped </p>
        </li>
    );
   }
   else if(type === 'leave-stage'){
    return (
        <li className="action">
            <p>{name} left the stage</p>
        </li>
    );
   }
   else if(type === 'join-stage'){
    return (
        <li className="action">
            <p>{name} joined the stage </p>
        </li>
    );
   }
   else if(type === 'join'){
    return (
        <li className="action">
            <p>{name} joined </p>
        </li>
    );
   }
   else if(type === 'leave'){
    return (
        <li className="action">
            <p>{name} left </p>
        </li>
    );
   }
 
  }

export default Chat;