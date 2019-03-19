import React from 'react';

function Person(id,name,avatar,inSession,onStage) {
   //inSession
   if(inSession === true && onStage === true){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <h3>{name}</h3>
            <div className ="green-dot"></div>
            <p>On Stage</p>
        </li>
    );
   }
   else if(inSession === true && onStage === false){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <h3>{name}</h3>
            <div className ="green-dot"></div>
            <p>In Session</p>
        </li>
    );
   }
   else if(inSession === false){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <h3>{name}</h3>
            <div className ="grey-dot"></div>
            <p>Left Session</p>
        </li>
    );
   }
  
  }

export default Person;