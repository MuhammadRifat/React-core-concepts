import logo from './logo.svg';
import './App.css';

function App() {
  const personName = [
    {name:'Rifat', job:'Software Engineer'},
    {name:'Romjan', job:'Executive Magistrate'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Person person={personName[0]}></Person>
        <Person person={personName[1]}></Person>
      </header>
    </div>
  );
}

function Person(props){
  console.log(props);
  return(
    <div style={{border:"1px solid white", margin:"10px", padding:"10px"}}>
      <h2>Name: {props.person.name}</h2>
      <p>{props.person.job}</p>
    </div>
  );
}

export default App;
