import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import renderer from 'react-test-renderer';


it('renders Stage without crasing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Stage
    name='name'
    avatar='alt-text'
  />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
 
});

it('renders the Stage as expected', () => {
  const tree = renderer
    .create(<Stage name="name" avatar='alt-text'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});