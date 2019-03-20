import React from 'react';
import './stage.css';


function Stage(props) {
   //inSession
   let avatar = props.avatar;
   let name = props.name;
    return (
        <li className="stage-obj">
             <p>{name} </p>
            <img className="avatar-stage" alt="avatar-text" src={avatar}/>
        </li>
    );
   
  }

export default Stage;