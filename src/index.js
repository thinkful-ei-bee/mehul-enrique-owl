import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './STORE.js';

ReactDOM.render(<App participants={STORE.ppl_list} chatEvents={STORE.chat_info} />, document.getElementById('root'));
