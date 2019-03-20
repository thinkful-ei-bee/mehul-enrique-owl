import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import STORE from './STORE.js';

it('renders without crasing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App participants={STORE.ppl_list} chatEvents={STORE.chat_info}  />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
 
});


it('snapshot test a app  as expected', () => {
  const tree = renderer
    .create( <App participants={STORE.ppl_list} chatEvents={STORE.chat_info}  />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});