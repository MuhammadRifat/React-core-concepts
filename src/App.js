import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
        <Users></Users>
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
  const [count, setCounter] = useState(0);
  const increaseHandler = () => setCounter(count + 1);
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={increaseHandler}>+</button>
    <button onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
}

function Users(){
  const [persons, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>Number of Users: {persons.length}</h2>
      <ul>
        {
          persons.map(user => <li>{user.name}: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
