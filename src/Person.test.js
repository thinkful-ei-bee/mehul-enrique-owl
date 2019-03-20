import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import renderer from 'react-test-renderer';


it('render a onstage person without crasing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Person
    id='any'
    name='name'
    avatar='alt-text'
    inSession = {true}
    onStage = {true}
  />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
 
});

it('snapshot test of a onStage person as expected', () => {
  const tree = renderer
    .create(<Person
      id='any'
      name='name'
      avatar='alt-text'
      inSession = {true}
      onStage = {true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});


it('render a in session person without crasing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Person
      id='any'
      name='name'
      avatar='alt-text'
      inSession = {true}
      onStage = {false}
    />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
   
  });
  
  it('snapshot test of a in-session person as expected', () => {
    const tree = renderer
      .create( <Person
        id='any'
        name='name'
        avatar='alt-text'
        inSession = {true}
        onStage = {false}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  

it('render a person who left  without crasing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Person
      id='any'
      name='name'
      avatar='alt-text'
      inSession = {false}
      onStage = {false}
    />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
   
  });
  
  it('snapshot test of a person who left as expected', () => {
    const tree = renderer
      .create(   <Person
        id='any'
        name='name'
        avatar='alt-text'
        inSession = {false}
        onStage = {false}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  
