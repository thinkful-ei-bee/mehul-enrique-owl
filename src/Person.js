import React from 'react';
import './Person.css';


function Person(props) {
    let onStage = props.onStage;
    let name = props.name;
    let avatar = props.avatar;
    let inSession = props.inSession;

   //inSession
   if(inSession === true && onStage === true){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <span>{name}</span>
            <div className ="green-dot"></div>
            <p className="location">On Stage</p>
        </li>
    );
   }
   else if(inSession === true && onStage === false){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <span>{name}</span>
            <div className ="green-dot"></div>
            <p className="location">In Session</p>
        </li>
    );
   }
   else if(inSession === false){
    return (
        <li className="Person">
            <img className="avatar" alt="avatar-text" src={avatar}/>
            <span>{name}</span>
            <div className ="grey-dot"></div>
            <p className="location">Left Session</p>
        </li>
    );
   }
  
  }

export default Person;