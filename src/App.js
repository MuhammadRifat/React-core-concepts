import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let roll = [1,2,3,4,5,6,7,8];
  const personName = [
    {name:'Rifat', job:'Software Engineer'},
    {name:'Romjan', job:'Executive Magistrate'},
    {name:'Rifat', job:'Software Engineer'},
    {name:'Romjan', job:'Executive Magistrate'},
    {name:'Rifat', job:'Software Engineer'},
    {name:'Romjan', job:'Executive Magistrate'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            roll.map(r => <li>{r}</li>)
          }
        </ul>
        {
          personName.map(person => <Person person={person}></Person>)
        }
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:"1px solid white", margin:"10px", padding:"10px"}}>
      <h2>Name: {props.person.name}</h2>
      <p>{props.person.job}</p>
    </div>
  );
}

function Counter(){
  const [count, setCounter] = useState(10);
  return (
    <h1>Count: {count}</h1>
  );
}

export default App;
