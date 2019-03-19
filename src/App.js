import React from 'react';
import Person from './Person.js'
import Chat from './Chat.js'

function App(props) {

let ppl_list = props.participants;
let chat_list = props.chatEvents;
let mappedPplList = ppl_list.map(obj => {
    return Person(obj.id,obj.name,obj.avatar,obj.inSession,obj.onStage);
    } 
    );

mappedPplList.join('');


let mappedChatList = chat_list.map(obj => {
    let avatar = "";
    let name = "";
    for(let x = 0; x< ppl_list.length; x++)
    { console.log("here");
        if(ppl_list[x].id === obj.participantId)
        {
            avatar = ppl_list[x].avatar;
            name = ppl_list[x].name;
            
            break;
        }
    }
    return Chat(obj.id,obj.type,obj.message,obj.time,obj.timestamp,avatar,name);
    } 
    );

mappedChatList.join('');




return (
<main className='App'>
<ul>{mappedPplList}</ul>
<ul>{mappedChatList}</ul>
</main>
 );
}

  	
export default App;