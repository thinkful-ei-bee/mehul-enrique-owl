import React from 'react';
import Person from './Person.js'
import Chat from './Chat.js'
import Stage from './stage.js'

import './App.css';


function App(props) {


let chat_list = props.chatEvents;

const onStage_ppl=props.participants.filter(participant=>participant.onStage) 
const inSession=props.participants.filter(participant=>participant.inSession && !participant.onStage) 
const left=props.participants.filter(participant=>!participant.onStage&&!participant.inSession) 
let ppl_list = onStage_ppl.concat(inSession).concat(left)


// chat list
let mappedChatList = chat_list.map(obj => {
  

    for(let x = 0; x< ppl_list.length; x++)
    {   
        if(ppl_list[x].id === obj.participantId)
        {
            obj.avatar = ppl_list[x].avatar;
            obj.name = ppl_list[x].name;
            
            break;
        }
    }

    return {
        id:obj.id,
        type:obj.type,
        message:obj.message,
        time:obj.time,
        timestamp:obj.timestamp,
        avatar:obj.avatar,
        name:obj.name
    }
    } 
); 





return (
<main className='App'>
<ul className="ppl-List"> 
{ppl_list.map(obj => (
    <Person
    id={obj.id}
    name={obj.name}
    avatar={obj.avatar}
    inSession = {obj.inSession}
    onStage = {obj.onStage}
  />
          ))}
</ul>
<ul className="chat-list"> 
{mappedChatList.map(obj => (
    
    <Chat
    id={obj.id}
    type={obj.type}
    message={obj.message}
    time = {obj.time}
    timestamp = {obj.timestamp}
    avatar = {obj.avatar}
    name = {obj.name}
  />
          ))}
</ul>

<ul className="stage-list"> 
{onStage_ppl.map(obj => (
    
    <Stage
    avatar = {obj.avatar}
    name = {obj.name}
  />
          ))}
</ul>



</main>
 );
}

  	
export default App;